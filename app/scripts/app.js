'use strict'
var app=angular.module('lms',['ngRoute','ngAnimate','ngStorage']);

  app.config(function ($routeProvider) {
    console.log("in rououting");
    $routeProvider
      .when('/addUser', {
        templateUrl:'../views/adduser.html',
        //templateUrl:'../views/addcategory'
        controller: 'addCtrl'

      })
      .when('/assign', {
        templateUrl:'../views/assigncourse.html',
        controller: 'assignCtrl',

      })
      .when('/addCourse', {
        templateUrl:'../views/addcourse.html',
          controller: 'addcourseCtrl'

      })
      .when('/certificate', {
        templateUrl:'../views/coursecertificate.html',
        controller: 'certiCtrl'

      })
      .otherwise({
        redirectTo: '/'
      });
  });
