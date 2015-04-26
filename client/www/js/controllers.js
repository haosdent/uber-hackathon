angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('DriversCtrl', function($scope, Drivers) {
  $scope.drivers = Drivers.all();
  $scope.remove = function(driver) {
    Drivers.remove(driver);
  }
})

.controller('DriverDetailCtrl', function($scope,
                                         $stateParams,
                                         Drivers,
                                         Items,
                                         Users) {
  $scope.driver = Drivers.get($stateParams.driverId);
  $scope.items = Items.getByDriverId($stateParams.driverId);
  // FIXME: use fix val here.
  $scope.user = Users.get(0);

  $scope.likeItem = function(itemId) {
    var like = $scope.isLikeItem(itemId);
    $scope.user.items[itemId].like = !like;
    console.log($scope.user.items[itemId].like);
    Users.update($scope.user);
  };
  $scope.isLikeItem = function(itemId) {
    var item = $scope.user.items[itemId];
    if (!item) {
      item = {
        itemId: itemId,
        like: false,
        openComments: false
      };
      $scope.user.items[itemId] = item;
    };
    if (!item.like) {
      return false;
    } else {
      return true;
    };
  };

  $scope.switchComments = function(itemId) {
    var open = $scope.isOpenComments(itemId);
    $scope.user.items[itemId].openComments = !open;
    Users.update($scope.user);
  };
  $scope.isOpenComments = function(itemId) {
    var item = $scope.user.items[itemId];
    if (!item) {
      item = {
        itemId: itemId,
        like: false,
        openComments: false
      };
      $scope.user.items[itemId] = item;
    };
    if (!item.openComments) {
      return false;
    } else {
      return true;
    };
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
