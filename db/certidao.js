
var util=require("util");
console.log("welcomw certidao");
function addUser(sname,cname,dur,response) {
  var user = require("./certidb");
  console.log("before data");
  var data = new user({"studentname": sname, "coursename": cname,"duration":dur});
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
