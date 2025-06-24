const express = require('express');
const app = express();
const ExpressError = require('./ExpressError');

//Error Handler Middleware



app.get('/view',(req,res)=>{
    abcd = abdss;  
})

app.get('/info', (req,res)=>{
    try{
        abcd = abcd;
    }catch(err){
        throw new ExpressError(401, "Access Denied")
    }
})

app.get('/', (req,res)=>{
    res.send("Home Page")
})

app.get('/about', (req,res)=>{
    res.send('About Page')
})




// app.use((err, req,res, next)=>{
//     console.log("------------Error-------------")
//     next();//This will find a middleware that id not error handler middleware;

//     //If you want other error handler middleware should be called then use folllowing :-
//     //   next(err);
// })

app.use((err, req,res, next)=>{
    console.log("------------Error-------------")
    res.send(err);
})





app.use((req,res)=>{  //This middleware is written at the end because if a request come and handled by 
                      // all the middleware and still the route not matched with all routes . In this case
                      // this middleware is used to send the message of "Page not found"
    res.status(404).send('page not found');
})

app.listen(3000, (err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Server is running on port 3000")
    }
})