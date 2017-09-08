const Router = require('koa-router');
const Db = require('../db');

let router = new Router();
router.post('/', async function(ctx, next) {
  const OrderItem = Db.instance.models['order-item'];
  const Order = Db.instance.models.order;
  const CartItem = Db.instance.models['cart-item'];
  const GroceryItem = Db.instance.models['grocery-item'];

  let items = ctx.request.body.data;
  await Db.instance.transaction(async () => {
    try {
      let groceryItems = await GroceryItem.findAll({
        where: {
          id: {
            $in: items.map(i => i.groceryItem.id)
          }
        }
      });
      if (groceryItems.length === 0) {
        return Promise.reject('No items in order!');
      }
      let order = await Order.create({
        name: 'TBD',
        totalPrice: 0
      });
      let totalPrice = 0;
      await Promise.all(
        groceryItems.map(groceryItem => {
          let qty = items.filter(i => i.groceryItem.id === groceryItem.id)[0]
            .qty;
          totalPrice += qty * groceryItem.price;
          return OrderItem.create({
            groceryItemId: groceryItem.id,
            orderId: order.id,
            qty
          });
        })
      );
      
      let orderName = `Order placed at ${(new Date(order.createdAt)).toISOString()}`;
      order = await order.update({
        name: orderName,
        totalPrice: 0.01 * Math.round(totalPrice * 100)
      });
      
      await CartItem.destroy({
        truncate: true
      });
      order = await Order.find({
        where: { id: order.id },
        include: [
          {
            model: OrderItem,
            as: 'orderItems',
            include: [
              {
                model: GroceryItem,
                as: 'groceryItem'
              }
            ]
          }
        ]
      });
      let payload = { data: order.get({ plain: true }) };
      ctx.body = payload;
    } catch (err) {
      ctx.body = { error: `Problem placing order: ${err}` };
    }
  }).catch(e => console.error(e));
});

module.exports = router;
