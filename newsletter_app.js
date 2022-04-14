const express = require('express'); // the express libray for the web application
const bodyParser = require('body-parser'); // the body-parser libray to get data from user input in html form
const requst = require('request');
const app = express(); // iniatilising the application
var port = 3000; // initialising the prt  3000 is the local port mean this computer is ther server
app.use(express.static("public"));// static is an express method used to declareing the that contains
                                  // static files like css images etc to render it with th express

app.use(bodyParser.urlencoded({extended:true}));// url encodeded is boda-parser method that is to get data from the user input


app.get('/',function(req,res){
  res.sendFile(__dirname + "/sign-Up.html") // sending html on the load page '/' this indicate the route or root directory
})
app.post('/', function(req, res){ // this post method comes from the html form it indicate what do when somethin is given by the user
  var first_name = req.body.firstn; // storing the user name in avariable using body-parser and html
  var last_name = req.body.lastn; // storing the user data in avariable using body-parser and html
  var e_mail = req.body.email; // storing the user data in avariable using body-parser and html
  console.log("The name  of the subscriber is " + first_name + " " + last_name + " and his email address is : " + e_mail);
})




app.listen(port,function(){
  console.log("Server Is Running");
})
