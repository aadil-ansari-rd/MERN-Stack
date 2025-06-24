//This file is for insert the sample data


const mongoose = require('mongoose');
const Chat = require('./model/Chat');
async function connection() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
        console.log('Database connected')
    } catch (err) {
        console.log(err)
    }

}
connection();



let allChats = [
    {
        from: "ram",
        to: "sham",
        msg: "Kesa hai bhai",
        created_at: new Date(),//Date is an inbuilt class that create a  random date
    },
    {
        from: "sona",
        to: "rupa",
        msg: "Kesi hai bahan",
        created_at: new Date(),//Date is an inbuilt class that create a  random date
    },
    {
        from: "radha",
        to: "rani",
        msg: "chalo khana banate hai",
        created_at: new Date(),//Date is an inbuilt class that create a  random date
    },
    {
        from: "sonu",
        to: "monu",
        msg: "Chal gedi marte hai",
        created_at: new Date(),//Date is an inbuilt class that create a  random date
    },
    {
        from: "seeta",
        to: "geeta",
        msg: "chalo padhte hai ",
        created_at: new Date(),//Date is an inbuilt class that create a  random date
    },
]

Chat.insertMany(allChats);