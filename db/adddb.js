'use strict'
console.log("adddb.js");
var mongoose = require("mongoose");
// Step -2 Connect to the DB
mongoose.createConnection("mongodb://127.0.0.1:27017/LMS");
// Step -3 Represent Schema
var Schema = mongoose.Schema;
// Step -4  Creating Schema for the Collection/*
var userSchema= new Schema({name:{type:'string'},emailid:{type:'string'}});
var User = mongoose.model("addusers",userSchema);  // User Object Represent users Collection/!*
module.exports=User;
