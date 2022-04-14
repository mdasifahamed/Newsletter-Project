const express = require('express');
const bodyParser = require('body-parser');
const requst = require('request');
const app = express();
var port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
  res.sendFile(__dirname + "/sign-Up.html")
})
app.post('/', function(req, res){
  var first_name = req.body.firstn;
  var last_name = req.body.lastn;
  var e_mail = req.body.email;
  console.log("The name  of the subscriber is " + first_name + " " + last_name + " and his email address is : " + e_mail);
})




app.listen(port,function(){
  console.log("Server Is Running");
})
