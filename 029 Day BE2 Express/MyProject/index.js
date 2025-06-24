const express = require("express"); //this return a function definition
const app = express();//express function is executed and whatever returns that kept in the app

let port = 3000 ;
 
app.listen(port , (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`App is running on Port ${port}`)

    }
})