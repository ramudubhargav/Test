const express= require('express');
const bodyParser = require('body-parser');
const app=express();
const placesRouter=require('./routes/places-routes');
const userRouter= require('./routes/users-routers');

app.use('/api/places',placesRouter);
app.use('/api/users',userRouter);
app.listen(3000);




/*const express = require('express');
const bodyParser= require('body-parser');
const app= express();

app.use(bodyParser.urlencoded({extended :false}));

app.post('/',(req,res,next)=>{
    res.send('<h1> user  ' +req.body.username +'</h1>')
})

app.get('/',(req,res,next)=>{
    res.send('<form method="POST"><input type="text" name="username"></input> <button type="submit">Create user </button></form>');
})

app.listen(5000);




/*const http =require('http');

const server =http.createServer((req,res)=>{
    console.log('Incoming');
    console.log(req.method,req.url);

    if(req.method==='POST'){
        let body='';
        req.on('end',()=>{
            const name =body.split('=')[1];
            res.end(`<h1>Got data of ${name} </h1>`)
        })
        req.on('data',(chuck)=>{
            body+=chuck
        })
    }
    else{
    res.setHeader('Content-type','text/html')
    res.end('<form method="POST"><input type="text" name="username"></input> <button type="submit">Create user </button></form>');
    }
})

server.listen(5000);


/*const fs = require('fs');

const name ="Hello";

fs.writeFile('user-data.txt','Name: '+name,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("working");
})*/