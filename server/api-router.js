const Router = require('koa-router');
const cart = require('./routes/cart');
const orders = require('./routes/orders');
const order = require('./routes/order');
const grocery = require('./routes/grocery');

let router = new Router();

router.use('/cart', cart.routes(), cart.allowedMethods());
router.use('/orders', orders.routes(), orders.allowedMethods());
router.use('/order', order.routes(), order.allowedMethods());
router.use('/grocery', grocery.routes(), grocery.allowedMethods());

module.exports = router;