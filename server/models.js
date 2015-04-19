var Mongorito = require('mongorito');
var Model = Mongorito.Model;
Mongorito.connect('localhost/uber-hackathon');

var User = Model.extend({
  collection: 'users'
});

var Item = Model.extend({
  collection: 'items'
});

module.exports = {
  User: User,
  Item: Item
}