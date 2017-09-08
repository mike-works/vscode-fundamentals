const Router = require('koa-router');
const Db = require('../db');

let router = new Router();
router
  .get('/', async function(ctx, next) {
    const Order = Db.instance.models.order;
    const OrderItem = Db.instance.models['order-item'];
    const GroceryItem = Db.instance.models['grocery-item'];

    let queryOptions = {
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
    };

    let status = (ctx.request.query || {}).status;
    switch ((status || '').toLowerCase()) {
      case 'all':
        break;
      case undefined:
      case '':
        queryOptions.where = {
          status: 'pending'
        };
        break;
      case 'pending':
      case 'inprogress':
      case 'complete':
        queryOptions.where = {
          status
        };
        break;
      default:
        throw new Error(`Invalid status filter: ${status}`);
    }
    try {
      let results = await Order.findAll(queryOptions);

      let plainResults = results.map(x => x.get({ plain: true }));

      ctx.body = { data: plainResults };
    } catch (err) {
      ctx.body = { error: `Problem fetching data: ${err}` };
    }
  })
  .get('/:id', async function(ctx, next) {
    const Order = Db.instance.models.order;
    const OrderItem = Db.instance.models['order-item'];
    const GroceryItem = Db.instance.models['grocery-item'];

    let queryOptions = {
      where: {
        id: ctx.params.id
      },
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
    };

    let result = await Order.findOne(queryOptions);

    let plainResult = result.get({ plain: true });
    ctx.body = { data: plainResult };
  });

module.exports = router;
