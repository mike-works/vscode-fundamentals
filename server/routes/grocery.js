const Router = require('koa-router');
const Db = require('../db');

let router = new Router();
let _cachedCategories = null;

const QUERY_DEFAULTS = Object.freeze({ limit: 10, offset: 0 });

function capitalize(str) {
  return `${str[0].toUpperCase()}${str.substring(1)}`;
}

function toTitleCase(rawStr) {
  return rawStr
    .split(/[\s-]+/g)
    .map((s) => capitalize(s))
    .join(' ');
}

function prepareQuery(rawQuery) {
  let queryParams = Object.assign(Object.assign({}, QUERY_DEFAULTS), rawQuery);
  let { limit, offset, category } = queryParams;
  let safeQuery = { limit, offset };
  if (category) {
    safeQuery.where = {
      category: toTitleCase(category)
    };
  }
  return safeQuery;
}

router
  .get('/categories', async function(ctx, next) {
    const GroceryItem = Db.instance.models['grocery-item'];
    
    if (_cachedCategories) {
      ctx.body = { data: _cachedCategories };
    }
    try {
      let results = await GroceryItem.count({ attributes: ['category'], group: 'category' });
      _cachedCategories = results;
      ctx.body = { data: results };
    } catch (err) {
      ctx.body = { error: `Problem fetching data: ${err}` };
    }
  })
  .get('/items', async function (ctx, next) {
    const GroceryItem = Db.instance.models['grocery-item'];
    let queryOptions = prepareQuery(ctx.query || {});
    
    try {
      let results = await GroceryItem.findAll(queryOptions);
      let plainResults = results.map((x) => x.get({plain: true}));
      ctx.body = {data: plainResults};  
    } catch (err) {
      ctx.body = { error: `Problem fetching data: ${err}` };
    }
  });

module.exports = router;