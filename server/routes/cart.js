const Router = require('koa-router');
const Db = require('../db');

let router = new Router();

function divideCartWork(items, allPlainCartItems) {
  let toAdd = null;
  let toUpdate = null;
  let toRemove = null;

  let groceryIdsInDbCart = allPlainCartItems.map(x => x.groceryItemId);

  let itemIds = items.map(i => i.groceryItem.id);
  toAdd = items.filter(d => groceryIdsInDbCart.indexOf(d.groceryItem.id) < 0);
  toUpdate = items.filter(
    d => groceryIdsInDbCart.indexOf(d.groceryItem.id) >= 0
  );
  toRemove = groceryIdsInDbCart.filter(id => itemIds.indexOf(id) < 0);

  return { toAdd, toUpdate, toRemove };
}

async function addCartItems(items, CartItem) {
  return Promise.all(
    items.map(async item => {
      let [cartItem] = await CartItem.findOrCreate({
        where: { groceryItemId: item.groceryItem.id }
      });
      return cartItem.update({
        qty: item.qty
      });
    })
  );
}

router.get('/items', async function(ctx, next) {
  const CartItem = Db.instance.models['cart-item'];
  const GroceryItem = Db.instance.models['grocery-item'];

  try {
    let results = await CartItem.findAll({
      include: [{ model: GroceryItem, as: 'groceryItem' }]
    });
    let plainResults = results.map(x => x.get({ plain: true }));
    ctx.body = { data: plainResults };
  } catch (err) {
    ctx.body = { error: `Problem fetching data: ${err}` };
  }
}).put('/items', async function(ctx, next) {
  const CartItem = Db.instance.models['cart-item'];
  const GroceryItem = Db.instance.models['grocery-item'];

  let items = ctx.request.body.data;
  await Db.instance.transaction(async () => {
    
    let allCartItems = await CartItem.findAll();
    let allPlainCartItems = allCartItems.map(ci => ci.get({ plain: true }));

    let { toAdd, toUpdate, toRemove } = divideCartWork(
      items,
      allPlainCartItems
    );
    await addCartItems(toAdd.concat(toUpdate), CartItem);
    if (toRemove.length > 0) {
      await CartItem.destroy({
        where: {
          groceryItemId: {
            $in: toRemove
          }
        }
      });
    }

    let results = await CartItem.findAll({
      include: [{ model: GroceryItem, as: 'groceryItem' }]
    });
    let plainResults = results.map(x => x.get({ plain: true }));
    ctx.body = { data: plainResults };
   
  });
});

module.exports = router;
