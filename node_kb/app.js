const express = require("express");
const path = require("path");
//init App
const app = express();
//Load view Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//Home Route
app.get ('/',function(req,res){
    res.render('index',{
        title:'test 23'
    });
});  


//Start Server
app.listen(3000,function(){
    console.log('server started on port 3000');
});