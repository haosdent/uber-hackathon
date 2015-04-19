var models = require('./models');

var users = {
  add: function *(){
    var user = new models.User({
      name: this.request.name,
      type: this.request.type
    });
    yield user.save();
    this.body = user;
  },
  updateById: function *(id){
    var user = yield models.User.findById(id);
    if (!user) {
      this.body = '';
    } else {
      user.set('name', this.request.name);
      user.set('type', this.request.type);
      yield user.save();
      this.body = user;
    }
  },
  getById: function *(id){
    var user = yield models.User.findById(id);
    this.body = user;
  },
  delById: function *(id){
    var user = yield models.User.findById(id);
    yield user.remove();
    this.body = user;
  }
}

var items = {
  add: function *(){
    var item = new models.Item({
      name: this.request.name,
      driverId: this.request.driverId,
      customerIds: this.request.customerIds
    });
    yield item.save();
    this.body = item;
  },
  updateById: function *(id){
    var item = yield models.Item.findById(id);
    if (!item) {
      this.body = '';
    } else {
      item.set('name', this.request.name);
      item.set('driverId', this.request.driverId);
      item.set('customerIds', this.request.customerIds);
      yield item.save();
      this.body = item;
    }
  },
  getById: function *(id){
    var item = yield models.Item.findById(id);
    this.body = item;
  },
  delById: function *(id){
    var item = yield models.Item.findById(id);
    if (item) {
      yield item.remove();
      this.body = item;
    }
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
    item.customerIds.push(customerId);
    yield item.save();
    this.body = item;
  },
  delCustomerIdInItem: function *(id, customerId){
    var item = yield models.Item.findById(id);
    if (!item) {
      return;
    }
    item.customerIds = item.customerIds.filter(function (e) {
      return e != customerId;
    });
    yield item.save();
    this.body = item;
  }
}

module.exports = {
  users: users,
  items: items
}