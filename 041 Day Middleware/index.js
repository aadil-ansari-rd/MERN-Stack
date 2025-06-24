const express = require('express');
const app = express();

//Middleware

// app.use('/home', (req,res, next)=>{
//     console.log('home middleware')
// })


//Middleware : Logger 

// app.use((req,res,next)=>{
//     console.log(req.method)
//     console.log(req.hostname)
//     console.log(req.path)
//     req.time = Date.now(); // Date.now() will give you the current date and time
//     console.log(req.time)
//     next();
// })


//Access token api middleware : Not actual token. it is only for practice middleware

app.use('/api',(req,res, next )=>{
    let token = req.query.token;
    if(token==="giveaccess"){
        next();
    }else{
        //throw new Error('Access Denied');   //We can send errors manually.
        res.send("Access denied");
    }
})
app.get('/api/data',(req,res)=>{
    res.send('Data for you');
})


app.get('/', (req,res)=>{
    res.send("Home Page")
})

app.get('/about', (req,res)=>{
    res.send('About Page')
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