
'use strict'
var util=require("util");
console.log("welcomw userdao");
function checkLogin(uid1,pwd1,response)
{
  var user=require("./commondb");
  user.find({"uid":uid1,"pwd":pwd1},function(error,docs)
{
  if(error){
    response.send("fail");
  }
  else
  if(docs && docs.length>0){
    console.log("sucess");
    console.log("Found..... "+uid1 +" "+pwd1+" "+docs);
    console.log(docs instanceof Object);
    console.log("docs"+util.inspect(docs));

       response.json(docs);
  }
  else
  {
    console.log("Not Found.... ");
    response.send("invalid");
  }

});
}
module.exports=checkLogin;
//for post

/*
var util=require("util");
console.log("welcomw userdao");
function checkLogin(uid1,pwd1,response) {
  var user = require("./commondb");
  console.log("before data");
  var data = new user({"userid": uid1, "pwd": pwd1});
  data.save(function (err) {
    if (err) {
      response.send("fail");
    }
    else {
      response.send("success");
    }
  });
}
module.exports=checkLogin;


*/
