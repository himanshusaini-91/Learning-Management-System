/**
 * Created by tanvirsaini32 on 8/05/2016.
 */
var app1=angular.module('lms1',[]);
app1.controller('Features', function ($scope) {

  $scope.subjects = ['adduser', 'addcourse', 'assignteacher'];
  $scope.selectedItem;
  $scope.dropboxitemselected = function (item) {

    $scope.selectedItem = item;
    $scope.f1=$scope.selectedItem;

  }

});
