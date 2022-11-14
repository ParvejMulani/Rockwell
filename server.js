var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

//Http Handlers
var onDefault=function(req, res){
    res.send("<h1>Rockwell Automation Inc,London</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Headquarter:London</li>"+
                    " <li>Employeee:35000</li>"+
                    " <li>MNC company</li>"+
                    " <li>Corporate Company</li>"+
             "</ol>");
};

var onAboutUs=function(req, res){
    res.send("<h1>Chief Mentor :Ravi Tambade</h1>");
};

app.get("/",onDefault); 
app.get("/aboutus",onAboutUs);
var server=app.listen(9000);
console.log("Server is running on port 9000");