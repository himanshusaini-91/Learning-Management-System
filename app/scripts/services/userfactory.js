'use strict';

/**
 * @ngdoc service
 * @name lmsApp.service
 * @description
 * # service
 * Service in the lmsApp.
 */
app.factory('userfactory', function ($http,$q) {
  console.log("helooofactory");
    var authenticateUser=function(userid,pwd){
      console.log("helooo function");

      var defered = $q.defer();
      console.log("hello deffered");
      var mydata = {
        userid: userid,
        pwd: pwd
      };
      console.log("before.http");
      $http.post("/login",mydata).success(function(data){
        console.log("response");
        defered.resolve(data);
        console.log("Login DONE----> "+data);
      }) .error(function(er){
        console.log("Error is ",er);
        //scope.offers = er;
        defered.reject(er);

      });

      return  defered.promise;
    }
    return {"authenticateUser":authenticateUser};
  });

app.factory('addfact', function ($http,$q) {
  console.log("helooofactory");
  var addUser=function(name,email){
    console.log("helooo function");

    var defered = $q.defer();
    console.log("hello deffered");
    var mydata = {
      name: name,
      email:email,
    };
    console.log("before.http");
    $http.post("/adduser",mydata).success(function(data){
      console.log("response");
      defered.resolve(data);
      console.log("Login DONE----> "+data);
    }) .error(function(er){
      console.log("Error is ",er);
      //scope.offers = er;
      defered.reject(er);

    });

    return  defered.promise;
  }
  return {"addUser":addUser};
});
app.factory('addcf', function ($http,$q) {
  console.log("helooofactory");
  var course=function(cname,cid,desc){
    console.log("helooo function");

    var defered = $q.defer();
    console.log("hello deffered");
    var mydata = {
      cname: cname,
      cid:cid,
      desc:desc
    };
    console.log("before.http");
    $http.post("/addcourse",mydata).success(function(data){
      console.log("response");
      defered.resolve(data);
      console.log("Login DONE----> "+data);
    }) .error(function(er){
      console.log("Error is ",er);
      //scope.offers = er;
      defered.reject(er);

    });

    return  defered.promise;
  }
  return {"course":course};
});
app.factory('certf', function ($http,$q) {
  console.log("helooofactory");
  var certi=function(sname,cname,dur){
    console.log("helooo function");

    var defered = $q.defer();
    console.log("hello deffered");
    var mydata = {
      sname: sname,
      cname:cname,
      dur:dur
    };
    console.log("before.http");
    $http.post("/certification",mydata).success(function(data){
      console.log("response");
      defered.resolve(data);
      console.log("Login DONE----> "+data);
    }) .error(function(er){
      console.log("Error is ",er);
      //scope.offers = er;
      defered.reject(er);

    });

    return  defered.promise;
  }
  return {"certi":certi};
});
app.factory('assignf', function ($http,$q) {
  console.log("helooofactory");
  var assign=function(tid,cname){
    console.log("helooo function");

    var defered = $q.defer();
    console.log("hello deffered");
    var mydata = {
      tid: tid,
      cname:cname,
    };
    console.log("before.http");
    $http.post("/assign",mydata).success(function(data){
      console.log("response");
      defered.resolve(data);
      console.log("Login DONE----> "+data);
    }) .error(function(er){
      console.log("Error is ",er);
      //scope.offers = er;
      defered.reject(er);

    });

    return  defered.promise;
  }
  return {"assign":assign};
});
