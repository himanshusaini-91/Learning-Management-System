
console.log("adddb.js");
var mongoose = require("mongoose");
// Step -2 Connect to the DB
mongoose.createConnection("mongodb://127.0.0.1:27017/LMS");
// Step -3 Represent Schema
var Schema = mongoose.Schema;
// Step -4  Creating Schema for the Collection/*
var userSchema= new Schema({studentname:{type:'string'},coursename:{type:'string'},duration:{type:'string'}});
var User = mongoose.model("certifications",userSchema);  // User Object Represent users Collection/!*
module.exports=User;
