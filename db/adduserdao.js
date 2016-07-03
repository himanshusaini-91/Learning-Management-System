'use strtict'
var util=require("util");
console.log("welcomw adduserdao");
function addUser(name,email,response) {
  var user = require("./adddb");
  console.log("before data");
  var data = new user({"name": name, "emailid": email});
  data.save(function (err) {
    if (err) {
      response.send("fail");
    }
    else {
      response.send("success");
    }
  });
}
module.exports=addUser;
