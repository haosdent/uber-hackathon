var logger = require('koa-logger');
var route = require('koa-route');
var koa = require('koa');
var app = koa();

var controllers = require('./controllers');

// use logger
app.use(logger());

// route definitions
//// users api
app.use(route.put('/user', controllers.users.add));
app.use(route.post('/user/:id', controllers.users.updateById));
app.use(route.get('/user/:id', controllers.users.getById));
app.use(route.del('/user/:id', controllers.users.delById));
//// items api
app.use(route.get('/item/driver/:driverId', controllers.items.getItemsByDriverId));
app.use(route.put('/item/:id/customer/:customerId', controllers.items.addCustomerIdToItem));
app.use(route.del('/item/:id/customer/:customerId', controllers.items.delCustomerIdInItem));
app.use(route.put('/item', controllers.items.add));
app.use(route.post('/item/:id', controllers.items.updateById));
app.use(route.get('/item/:id', controllers.items.getById));
app.use(route.del('/item/:id', controllers.items.delById));


app.listen(3000);
console.log('listening on port 3000');