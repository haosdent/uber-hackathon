var models = require('./models');
var parse = require('co-body');

var users = {
  add: function *(){
    var request = JSON.parse(yield parse(this));
    var user = new models.User(request);
    yield user.save();
    this.body = user.attributes;
  },
  updateById: function *(id){
    var request = JSON.parse(yield parse(this));
    var user = yield models.User.findById(id);
    if (!user) {
      return;
    }
    user.attributes = request;
    yield user.save();
    this.body = user.attributes;
  },
  getById: function *(id){
    var user = yield models.User.findById(id);
    if (user) {
      this.body = user.attributes;
    }
  },
  delById: function *(id){
    var user = yield models.User.findById(id);
    if (!user) {
      return;
    }
    yield user.remove();
    this.body = user.attributes;
  }
}

var items = {
  add: function *(){
    var request = JSON.parse(yield parse(this));
    var item = new models.Item(request);
    yield item.save();
    this.body = item.attributes;
  },
  updateById: function *(id){
    var request = JSON.parse(yield parse(this));
    var item = yield models.Item.findById(id);
    if (!item) {
      return;
    }

    item.attributes = request;
    yield item.save();
    this.body = item.attributes;
  },
  getById: function *(id){
    var item = yield models.Item.findById(id);
    if (!item) {
      return;
    }
    this.body = item.attributes;
  },
  delById: function *(id){
    var item = yield models.Item.findById(id);
    if (!item) {
      return;
    }
    yield item.remove();
    this.body = item.attributes;
  },
  getItemsByDriverId: function *(driverId){
    var result = yield models.Item.find({driverId: driverId});
    this.body = result;
  },
  addCustomerIdToItem: function *(id, customerId){
    var item = yield models.Item.findById(id);
    if (!item) {
      return;
    }
    item.attributes.customerIds.push(customerId);
    yield item.save();
    this.body = item.attributes;
  },
  delCustomerIdInItem: function *(id, customerId){
    var item = yield models.Item.findById(id);
    if (!item) {
      return;
    }
    item.attributes.customerIds = item.attributes.customerIds.filter(function (e) {
      return e != customerId;
    });
    yield item.save();
    this.body = item.attributes;
  }
}

module.exports = {
  users: users,
  items: items
}