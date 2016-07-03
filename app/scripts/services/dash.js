/*

app =angular.module('lms1',['ngRoute','ngAnimate','ngStorage']);

app.config(function ($routeProvider) {
 console.log("in rououting");
 $routeProvider
 /!*.when('/', {
 templateUrl:'/views/index.html',
 controller: 'MainCtrl',
 controllerAs: 'main'
 })*!/
 .when('/adduser', {
 templateUrl:'../../app/views/adduser.html'

 })
   .when('/addcourse', {
     templateUrl:'../../app/views/addcourse.html'

   })
   .when('/assigncourse', {
     templateUrl:'../../app/views/assigncourse.html'
   })
   .when('/coursecertificate', {
     templateUrl:'../../app/views/coursecertificate.html'
   })

 .otherwise({
 redirectTo: '/'
 });
 });
*/
