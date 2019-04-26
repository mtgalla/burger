var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

//middleware that helps encode the object data and 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("."));
//app.use(express.static("public"));
//app.use(express.static(__dirname + '/public'));
//app.use("/code", express.static(__dirname + "/code"));



app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});