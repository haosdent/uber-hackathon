var Mongorito = require('mongorito');
var Model = Mongorito.Model;
Mongorito.connect('localhost/uber-hackathon');

class User extends Model {

}

class Item extends Model {

}

module.exports = {
  User: User,
  Item: Item
}