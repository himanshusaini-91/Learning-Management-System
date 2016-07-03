
console.log("coommondao.js");
var mongoose = require("mongoose");
// Step -2 Connect to the DB
mongoose.connect("mongodb://127.0.0.1:27017/LMS");
// Step -3 Represent Schema
var Schema = mongoose.Schema;
// Step -4  Creating Schema for the Collection/*
var userSchema= new Schema({});
var User = mongoose.model("users",userSchema);  // User Object Represent users Collection/!*
module.exports=User;

/*var mongoose = require("mongoose");
// Step -2 Connect to the DB
mongoose.connect("mongodb://127.0.0.1:27017/LMS");
// Step -3 Represent Schema
var Schema = mongoose.Schema;
// Step -4  Creating Schema for the Collection/!*
var userSchema= new Schema({userid:{type:'string'},pwd:{type:'string'}});
var User = mongoose.model("books",userSchema);  // User Object Represent users Collection/!*
var s=new User({userid:"himanshu",pwd:"12345"});
s.save();
module.exports=User;
*!/*/
/*
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LMS');
var Schema= mongoose.Schema;
var uschema = new Schema({userid:{type:'string'},pwd:{type:'string'}},{versionKey:"false"});
console.log("before schema");
var reg = mongoose.model('regs',uschema);
console.log("after model");
var reg1= new reg({
  fname:'rahul',
  lname:'rahul',
  userid:'rahul123',
  pwd:'1234',
  age:'23',
  gender:'m',
  dob:'23/1/1998',
  contact:'1232534',
  email:'rahul@lms.com',
  address:'ashgdfsh24',
  zipcode:'123453',
  city:'delhi',
  quaexp:'none',
  teachsub:'none'});
reg1.save();
module.exports=reg;
*/
