

'user strict'
app.controller('UserCtrl', function ($scope,userfactory,$location,$localStorage) {
    $scope.checkUser = function () {
      var userid = $scope.userid;
      var pwd = $scope.pwd;
      console.log("before promise");
      var promise = userfactory.authenticateUser(userid, pwd);
      promise.then(function (data) {
         // var afterdata=$rootScope.data;
        $localStorage.afterdata=data;
        console.log("before dash ctrl"+$localStorage.afterdata);
        if (data[0].uid==userid)
          {

            console.log("ABS ", $location.absUrl());
            // $location.url('http://localhost:9000/views/dashboard.html');
            console.log("controller"+data.uid);
            location.href = "http://localhost:5589/views/dashboard.html";
            //if(data[0].role=="admin")
            //{
            //  create
            //}
          }
          //$location.path("http://localhost:9000/views/dashboard.html");
          else if (data == "invalid") {
            alert("invalid userid or password");
          }
          else {
            alert("fail");
          }
        }, function (err) {
          alert("error", err);
        }
      );
    }
  });
app.controller('dashctrl',function($scope,$localStorage){
  $scope.dis=$localStorage.afterdata;

  console.log($scope.dis);
  var c=$scope.dis[0].role[0].right;
  var d=c[0].link;
  console.log("d is"+d);
  console.log("scope  routing variable is",c[0].link);
   $scope.xy = $scope.dis[0].role[0].right;
  console.log("XY is ",$scope.xy);
  console.log("DATA is ",$scope.xy[0].link+ " "+$scope.xy[0].rightname);
  console.log($scope.dis);

});

/*
app.controller('q', function ($scope,userfactory,$location,$localStorage) {
  $scope.checkUser = function () {
    $scope.array=[];
   $scope.obj ={


   }
    var userid = $scope.question;
    var pwd = $scope.answer;
    var obj={us:userid,p:pwd};
    console.log("before promise");
    var promise = userfactory.authenticateUser(userid, pwd);
    promise.then(function (data) {
        // var afterdata=$rootScope.data;
        $localStorage.afterdata=data;
        console.log("before dash ctrl"+$localStorage.afterdata);
        if (data[0].uid==userid)
        {

          console.log("ABS ", $location.absUrl());
          // $location.url('http://localhost:9000/views/dashboard.html');
          console.log("controller"+data.uid);
          location.href = "http://localhost:5589/views/dashboard.html";
          //if(data[0].role=="admin")
          //{
          //  create
          //}
        }
        //$location.path("http://localhost:9000/views/dashboard.html");
        else if (data == "invalid") {
          alert("invalid userid or password");
        }
        else {
          alert("fail");
        }
      }, function (err) {
        alert("error", err);
      }
    );
  }
});
*!/
*!/
*/
//post data
/*
app.controller('UserCtrl', function ($scope,userfactory,$location,$localStorage) {
  $scope.checkUser = function () {
    var userid = $scope.userid;
    var pwd = $scope.pwd;
    console.log("before promise");
    var promise = userfactory.authenticateUser(userid, pwd);
    promise.then(function (data) {
        if (data == "success")
        {
               alert("successfully Registered");
        }
        //$location.path("http://localhost:9000/views/dashboard.html");
        else if (data == "invalid") {
          alert("invalid userid or password");
        }
        else {
          alert("fail");
        }
      }, function (err) {
        alert("error", err);
      }
    );
  }
});
*/
//adduser
app.controller('addCtrl', function ($scope,addfact,$location,$localStorage) {
  $scope.addUser = function () {
    var name = $scope.name1;
    var email = $scope.email1;
    console.log("before promise");
    var promise = addfact.addUser(name,email);
    promise.then(function (data) {
        if (data == "success")
        {
          alert("successfully");
        }
        //$location.path("http://localhost:9000/views/dashboard.html");
        else if (data == "invalid") {
          alert("invalid fields");
        }
        else {
          alert("fail");
        }
      }, function (err) {
        alert("error", err);
      }
    );
  }
  $scope.cancel = function () {
    $scope.name1 =' ' ;
    $scope.email1 = ' ';
  };

});

app.controller('addcourseCtrl', function ($scope,addcf) {

  $scope.cshow = function () {
    var cname = $scope.cname;
    var cid = $scope.cid;
    var desc=$scope.desc;
    console.log("before promise");
    var promise = addcf.course(cname,cid,desc);
    promise.then(function (data) {
        if (data == "success")
        {
          alert("successfully inserted");
        }

        else if (data == "invalid") {
          alert("invalid userid or password");
        }
        else {
          alert("fail");
        }
      }, function (err) {
        alert("error", err);
      }
    );
  }
  $scope.cancel = function () {
    $scope.cname =' ' ;
    $scope.cid = ' ';
    $scope.desc = ' ';
  };

});


app.controller('certiCtrl', function ($scope,certf) {

  $scope.show = function () {
    var sname = $scope.sname;
    var cname = $scope.coursename;
    var dur=$scope.duration;
    console.log("before promise");
    var promise = certf.certi(sname,cname,dur);
    promise.then(function (data) {
        if (data == "success")
        {
          alert("successfully inserted");
        }

        else if (data == "invalid") {
          alert("invalid userid or password");
        }
        else {
          alert("fail");
        }
      }, function (err) {
        alert("error", err);
      }
    );
  }
  $scope.cancel = function () {
    $scope.sname =' ' ;
    $scope.coursename = ' ';
    $scope.dur = ' ';
  };

});

app.controller('assignCtrl', function ($scope,assignf) {

  $scope.assign = function () {
    var tid = $scope.teacherid;
    var cname = $scope.coursename;
    console.log("before promise");
    var promise =assignf.assign(tid,cname);
    promise.then(function (data) {
        if (data == "success")
        {
          alert("successfully inserted");
        }

        else if (data == "invalid") {
          alert("invalid userid or password");
        }
        else {
          alert("fail");
        }
      }, function (err) {
        alert("error", err);
      }
    );
  }
  $scope.cancel = function () {
    $scope.name1 =' ' ;
    $scope.email1 = ' ';
  };

});
