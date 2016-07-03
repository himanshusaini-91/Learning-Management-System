'use strtict'
var util=require("util");
console.log("welcomw assign");
function assigncourse(tid,cname,response) {
  var user = require("./assigndb");
  console.log("before data");
  var data = new user({"teacherid": tid, "coursename":cname});
  data.save(function (err) {
    if (err) {
      response.send("fail");
    }
    else {
      response.send("success");
    }
  });
}
module.exports=assigncourse;

