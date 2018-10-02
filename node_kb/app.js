const express = require("express");
const path = require("path");
//init App
const app = express();
//Load view Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//Home Route
app.get ('/',function(req,res){
    let articles=[
        {
            id:1,
            title:"artic one",
            author:"Base 1",
            body:"1:Its fun to code in node using pug"
        },
        {
            id:2,
            title:"artic two",
            author:"Base 2",
            body:"2:Its fun to code in node using pug"
        }
    
    ];
    res.render('index',{
        title:'test 23',
        articles:articles
    });
});  

app.get('/article/add',function(req,res){
res.render('add_article',{
title:"Add Article "
});
});

//Start Server
app.listen(3000,function(){
    console.log('server started on port 3000');
});