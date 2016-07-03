'use strtict'
var util=require("util");
console.log("welcomw addcoursedao");
function addCourse(coursename,courseid,desc,response) {
  var user = require("./addcdb");
  console.log("before data");
  var data = new user({"coursename": coursename, "courseid": courseid,"description":desc});
  data.save(function (err) {
    if (err) {
      response.send("fail");
    }
    else {
      response.send("success");
    }
  });
}
module.exports=addCourse;

