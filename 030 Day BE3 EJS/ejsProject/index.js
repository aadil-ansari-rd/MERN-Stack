const express = require('express')
const app = express();
app.set('view engine', 'ejs')

let port = 3000;



app.get('/home', (req,res)=>[
    res.render('home.ejs')
])


app.get('/ig/:username' , (req,res)=>{
    let username = req.params.username;
    const ig = require('./data.json');
    let data = ig[username]
    console.log(data)
    res.render('instagram.ejs', {data})
})

app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Server is running on port : " , port)
    }
})