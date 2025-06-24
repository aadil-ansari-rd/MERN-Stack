const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path');
const Chat = require('./model/Chat');
const methodOverride = require('method-override');


app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

async function connection() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
        console.log('Database connected')
    } catch (err) {
        console.log(err)
    }

}
connection();

//Index Route

app.get('/chats', async (req, res) => {
    try {
        let chats = await Chat.find();
        res.render('index.ejs', { chats });
    } catch (err) {
        console.log(err.message)
    }
})

//New Chat form 

app.get('/chats/new', (req, res) => {
    try {
        res.render('newChat.ejs')
    } catch (err) {
        console.log(err.message)
    }
})

//Post new chat

app.post('/chats', async (req, res) => {
    try {
        let chat = new Chat(req.body);
        chat.created_at = new Date();
        await chat.save();
        res.redirect('/chats');
    } catch (err) {
        console.log(err.message)
    }
})

//Edit page route

app.get('/chats/:id/edit', async (req, res) => {
    try {
        let id = req.params.id;
        let chat = await Chat.findOne({ _id: id })
        res.render('chatEdit', { chat })
    } catch (err) {
        console.log(err.message)
    }
})

//Update message route

app.put('/chats/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let chat = await Chat.findOne({ _id: id });
        // chat.msg = req.body.msg;
        // chat.save();
        await Chat.findByIdAndUpdate(
            id,
            { msg: req.body.msg },
            { runValidators: true, new: true }
        );

        res.redirect('/chats');
    } catch (err) {
        console.log(err.message)
    }
})

//Delete message route 

app.delete('/chats/:id', async (req, res) => {
    try {
        let id = req.params.id;
        await Chat.findByIdAndDelete(id);
        res.redirect('/chats');
    } catch (err) {
        console.log(err.message)
    }
})


app.get('/', (req, res) => {
    res.send('working')
})















app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Your server is running on port 8080')
    }
})