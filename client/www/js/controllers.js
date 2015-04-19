angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('DriversCtrl', function($scope, Drivers) {
  $scope.drivers = Drivers.all();
  $scope.remove = function(driver) {
    Drivers.remove(driver);
  }
})

.controller('DriverDetailCtrl', function($scope, $stateParams, Drivers) {
  console.log($stateParams.driverId);
  $scope.driver = Drivers.get($stateParams.driverId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
