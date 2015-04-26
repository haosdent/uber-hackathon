angular.module('starter.services', [])

.factory('Drivers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var drivers = [{
    id: 0,
    name: 'Ben Sparrow',
    signature: 'You on your way?',
    avatar: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    signature: 'Hey, it\'s me',
    avatar: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    signature: 'Did you get the ice cream?',
    avatar: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    signature: 'I should buy a boat',
    avatar: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    signature: 'Look at my mukluks!',
    avatar: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return drivers;
    },
    remove: function(driver) {
      drivers.splice(drivers.indexOf(driver), 1);
    },
    get: function(driverId) {
      for (var i = 0; i < drivers.length; i++) {
        if (drivers[i].id === parseInt(driverId)) {
          return drivers[i];
        }
      }
      return null;
    }
  };
})

.factory('Items', function() {

  var items = [{
    id: 0,
    driverId: 0,
    pic: 'delorean.jpg',
    describe: 'Describe describe describe',
    likes: [2],
    comments: [{
      content: 'comment 1',
      customerId: 0,
    }, {
      content: 'comment 2',
      customerId: 1,
    }, {
      content: 'comment 3',
      customerId: 2,
    }]
  }, {
    id: 1,
    driverId: 1,
    pic: 'delorean.jpg',
    describe: 'Describe describe describe',
    likeCount: 2,
    comments: [{
      content: 'comment 1',
      customerId: 0,
    }, {
      content: 'comment 2',
      customerId: 1,
    }, {
      content: 'comment 3',
      customerId: 2,
    }]
  }];

  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id == itemId) {
          return item[i];
        }
      }
      return null;
    },
    getByDriverId: function(driverId) {
      var result = items.filter(function(item) {
        return item.driverId == driverId;
      });
      return result;
    },
    like: function(itemId, userId) {
      var item = _(items).findWhere({id: itemId});
      if (item) {
        item.likes.push(userId);
      };
    },
    unlike: function(itemId, userId) {
      var item = _(items).findWhere({id: itemId});
      item.likes = _(item.likes).without(userId);
    }
  };
})

.factory('Users', function() {

  var users = [{
    id: 0
  }];

  return {
    all: function() {
      return users;
    },
    remove: function(user) {
      users.splice(users.indexOf(user), 1);
    },
    get: function(userId) {
      return _(users).find({id: userId});
    },
    update: function(user) {
      users.splice(users.indexOf(user), 1).push(user);
    }
  };
});