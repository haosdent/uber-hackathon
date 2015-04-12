var users = {
  add: function *(){
    this.body = 'addUser';
  },
  updateById: function *(id){
    this.body = 'updateUserById:' + id;
  },
  getById: function *(id){
    this.body = 'getUserById:' + id;
  },
  delById: function *(id){
    this.body = 'deleteById:' + id;
  }
}

module.exports = users;