var logger = require('koa-logger');
var route = require('koa-route');
var koa = require('koa');
var app = koa();

var users = require('./users');
var items = require('./items');

// use logger
app.use(logger());

// route definitions
//// users api
app.use(route.put('/user', users.add));
app.use(route.post('/user/:id', users.updateById));
app.use(route.get('/user/:id', users.getById));
app.use(route.del('/user/:id', users.delById));
//// items api
app.use(route.get('/item/driver/:driverId', items.getItemsByDriverId));
app.use(route.put('/item/:id/customer/:customerId', items.addCustomerIdToItem));
app.use(route.del('/item/:id/customer/:customerId', items.delCustomerIdInItem));
app.use(route.put('/item', items.add));
app.use(route.post('/item/:id', items.updateById));
app.use(route.get('/item/:id', items.getById));
app.use(route.del('/item/:id', items.delById));


app.listen(3000);
console.log('listening on port 3000');