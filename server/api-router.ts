import * as Router from 'koa-router';
import cart from './routes/cart';
import orders from './routes/orders';
import order from './routes/order';
import grocery from './routes/grocery';

let router = new Router();
// router.get('/', async function (ctx, next) {
//   ctx.body = 'Hello World!';
// });

router.use('/cart', cart.routes(), cart.allowedMethods());
router.use('/orders', orders.routes(), orders.allowedMethods());
router.use('/order', order.routes(), order.allowedMethods());
router.use('/grocery', grocery.routes(), grocery.allowedMethods());

export default router;