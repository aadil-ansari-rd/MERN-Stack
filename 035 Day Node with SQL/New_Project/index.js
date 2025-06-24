const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path')
const methodOverride = require('method-override');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method") )
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "/views"));


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: "delta_app",
    password: 'root'
})

let getUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password(),
    ];
}

let q = "INSERT INTO user(id, username ,email, password) VALUES ?";

let users = [];
for (let i = 1; i <= 100; i++) {
    users.push(getUser());
}


app.get('/', (req, res) => {
    let q = "SELECT count(*) FROM user";
    try {
         connection.query(q,  (err, result) => {
            if (err) {
                throw err;
            }
            //console.log(result[0]['count(*)'])//give actual number
            //console.log(result[0].count(*))  //give actual number : but this format cant be used bcz 
            //'count(*)' look like a function not like a field.

            let count = result[0]['count(*)'];
            res.render('home.ejs',{count})
        })
    } catch (err) {
        console.log(err);
        res.send('Some Error occured')
    }

})


//Get user list route
app.get('/users', (req, res) => {
    let q = "SELECT * FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) {
                throw err;
            }
            //   console.log(result) //reult : array of object
            let data =result;
            res.render('userList.ejs', { data})
        })
    } catch (err) {
        console.log(err);
        res.send('Some Error occured')
    }

})



//Get user edit page route
app.get("/user/:id/edit", (req, res) => {
    try {
        let { id } = req.params;
        let q = `SELECT * FROM user WHERE id='${id}'`; // Use single quotes for SQL values
        connection.query(q, (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result); // result: array of object , array has only one object as the id is uniqe
            let data = result[0];
            res.render("editPage.ejs", { data });
        });

    } catch (err) {
        console.log(err.message);
        res.send(err.message);
    }
});

//Get user update route

app.patch('/user/:id', (req,res)=>{
    try{
        let {id}= req.params;
        console.log(req.body);
        let password = req.body.password;
        let username = req.body.username;
        console.log(username)
        let q = `SELECT * FROM user WHERE  id='${id}'`;
        connection.query(q, (err, result) => {
            if (err) {
                throw err;
            }
            if(result[0].password!=password){
                res.send("User not found")
            }else{
                let q2= `Update user SET username='${username}' WHERE id='${id}'`
                connection.query(q2, (err, result) => {
                    if (err) {
                        throw err;
                    }
                    console.log(result); // result: array of object , array has only one object as the id is uniqe
                    res.redirect('/users');
                });

            }
        });
        



    }catch(err){
        console.log(err.message)
    }
})




app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Your server is running on port 8080`)
    }
})