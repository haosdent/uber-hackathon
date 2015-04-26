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
  $scope.user.items = {};

  $scope.likeItem = function(itemId) {
    if ($scope.isLikeItem(itemId)) {
      Items.unlike(itemId, $scope.user.id);
    } else {
      Items.like(itemId, $scope.user.id);
    }
  };
  $scope.isLikeItem = function(itemId) {
    var item = _($scope.items).findWhere({id: parseInt(itemId)});
    if (!item) {
      return false;
    };
    if (!_(item.likes).contains($scope.user.id)) {
      return false;
    };
    return true;
  };

  $scope.switchComments = function(itemId) {
    var open = $scope.isOpenComments(itemId);
    $scope.user.items[itemId].openComments = !open;
  };
  $scope.isOpenComments = function(itemId) {
    var item = $scope.user.items[itemId];
    if (!item) {
      item = {
        itemId: itemId,
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
