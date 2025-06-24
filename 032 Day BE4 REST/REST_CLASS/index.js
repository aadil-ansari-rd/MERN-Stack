const express = require('express');
const app = express();
const path = require('path'); //to set the paths for other folders
const methodOverride = require('method-override') ;//method override package

const { v4: uuidv4 } = require('uuid'); //For uique ID generation
//uuidv4(); //calling this function will give a unique id ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({ extended: true })); //to parse the encoded  url

app.set('view engine', 'ejs'); //to set the view engine

app.set('views', path.join(__dirname, 'views')); //to specify the ejs files

app.use(express.static(path.join(__dirname, 'public'))) //to specify the other files like css ,js etc

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))



// Database

let posts = [
    {
        id : uuidv4()  ,
        username: "@abc",
        content: "This is my first experience here"
    },
    {
        id:uuidv4(),
        username: "@efg",
        content: "This is my second experience here"
    },
]


//Routes

app.get('/', (req, res) => {
    res.render('home.ejs', { posts });

})

app.get('/posts/new', (req, res) => {
    res.render('NewForm.ejs')
})

app.post('/posts/new', (req, res) => {
    // let {username, content}= req.body; //working
    //posts.push({username, content})
    let user = {};
    user.username = req.body.username;
    user.content = req.body.content;
    user.username = "@" + user.username;

    // let idx = posts.length -1
    // user.id = posts[idx].id + 1;

    user.id = uuidv4(); //for unique id Generation

    posts.push(user);


    //res.render('home.ejs', {posts})
    res.redirect('/')
})

app.get('/posts/:id',(req,res)=>{
    let id = req.params.id;
    let post = posts.find((post)=>
        post.id===id
    )
    res.render('Viewpost.ejs', {post})
})

app.get('/posts/edit/:id',(req,res)=>{
    let id = req.params.id;
    let post = posts.find((post)=>
        post.id===id
    )
    res.render('EditForm.ejs' , {post})
})

app.patch('/posts/edit/:id',(req,res)=>{
    let id = req.params.id;
    let post = posts.find((p)=> p.id === id);
    post.content = req.body.content;
    res.redirect('/')

})

app.delete('/posts/:id', (req,res)=>{
    let id = req.params.id;
    posts = posts.filter((p)=>p.id!=id);
    res.redirect('/')
})



//Server Connection

let port = 8080;

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Server is running on port ${port}`)
    }
})