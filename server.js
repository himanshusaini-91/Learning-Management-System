
'use-strict'
var express=require("express");
var bodyParser=require("body-Parser");
var app=express();
app.use(express.static("app"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.post("/login",function(req,res)
{
  console.log("inside");
  var userid="rahul";
  var checklogin=require("./db/userdao")//by using get we can check json
  //checklogin(userid,res);
  var userid=req.body.userid;
  var pwd=req.body.pwd;
  console.log("users"+userid+"password"+pwd);
  var checklogin=require("./db/userdao");
  checklogin(userid,pwd,res);
});
app.post("/adduser",function(req,res)
{
  var name=req.body.name;
  var email=req.body.email;
  console.log("users"+name+"email"+email);
  var addUser=require("./db/adduserdao");
  addUser(name,email,res);
});
app.post("/certification",function(req,res)
{
  var sname=req.body.sname;
  var cname=req.body.cname;
  var dur=req.body.dur;
  console.log("users"+sname+"email"+cname+dur);
  var addUser=require("./db/certidao");
  addUser(sname,cname,dur,res);
});
app.post("/assign",function(req,res)
{
  var tid=req.body.tid;
  var cname=req.body.cname;
  console.log("teacherid"+tid+"cname"+cname);
  var assigncourse=require("./db/assigndao");
  assigncourse(tid,cname,res);
});
app.post("/addcourse",function(req,res)
{
  var cid=req.body.cid;
  var cname=req.body.cname;
  var desc=req.body.desc;
  console.log("teacherid"+cid+"cname"+cname+desc);
  var addCourse=require("./db/addcoursedao");
  addCourse(cid,cname,desc,res);
});
app.listen(5589,function(){
  console.log("server is start....");
});
