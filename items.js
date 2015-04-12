var items = {
  add: function *(){
    this.body = 'items.add';
  },
  updateById: function *(id){
    this.body = 'items.updateById:' + id;
  },
  getById: function *(id){
    this.body = 'items.getById:' + id;
  },
  delById: function *(id){
    this.body = 'items.delById:' + id;
  },
  getItemsByDriverId: function *(driverId){
    this.body = 'items.getItemsByDriverId:' + driverId;
  },
  addCustomerIdToItem: function *(id, customerId){
    this.body = 'items.addCustomerIdToItem:' + itemId + ',' + customerId;
  },
  delCustomerIdInItem: function *(id, customerId){
    this.body = 'items.delCustomerIdInItem:' + itemId + ',' + customerId;
  }
}

module.exports = items;