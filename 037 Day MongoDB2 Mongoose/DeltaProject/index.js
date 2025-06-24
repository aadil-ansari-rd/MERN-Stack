const mongoose = require('mongoose'); //to import/require the library

//Create Connection -------------------------------------------------------------------------------------------
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test'); // to connect with mongodb

}

main().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
})


//Create Schema -------------------------------------------------------------------------------------------------
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})


//Create Model ----------------------------------------------------------------------------------------------------
const User = mongoose.model('User', userSchema);



//Insert One -------------------------------------------------------------------------------------------------------

async function insertOne() {
    let user1 = new User({ name: 'adam', email: "adam@gmail.com", age: 25 })
    let user2 = new User({ name: 'eve', email: "eve@gmail.com", age: 24 })
    await user1.save(); // Data saved
    await user2.save();
    console.log('Data Saved');
}
//insertOne();


//Insert Many ----------------------------------------------------------------------------------------------------------

// User.insertMany([
//     {
//         name: 'Tony',
//         email: 'tony@gmail.com',
//         age: 50
//     },
//     {
//         name: 'Bruce',
//         email: 'bruce@gmail.com',
//         age: 50
//     },
//     {
//         name: 'Peter',
//         email: 'peter@gmail.com',
//         age: 50
//     }
// ]).then((data) => {
//     console.log(data) //data = above array of object
// })

async function insertMany() {
    await User.insertMany([
        {
            name: 'Tony',
            email: 'tony@gmail.com',
            age: 47
        },
        {
            name: 'Bruce',
            email: 'bruce@gmail.com',
            age: 50
        },
        {
            name: 'Peter',
            email: 'peter@gmail.com',
            age: 30
        }
    ])
    console.log('Data added');
}
//insertMany();



//Find-----------------------------------------------------------------------------------------------------------

//find({})

// User.find({}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })



//find({condition})-------------------

// User.find({age: {$gte : 47}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })



// findOne({condition})----------------

// User.findOne({age: {$gte : 47}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// findById('id')---------------------

// User.findById('67dbfdd3e5c261ddc7d36ed8').then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


//Update---------------------------------------------------------------------------------------------------------


//updateOne(filter, update); ---------

// User.updateOne({name: "Bruce"}, {age:49}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

//updateMany(filter, update) ----------

// User.updateMany({age: {$gt:45}}, {age:40}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

//findOneAndUpdate()--------------------

// User.findOneAndUpdate({name: "Tony"}, {age:60} , {new:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

//Model.findByIdAndUpdate()--------------

// User.findByIdAndUpdate('67dbfdd3e5c261ddc7d36ed7', {age:40} , {new:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })



//DELETE --------------------------------------------------------------------------------------------------------------


//deleteOne()------------------------
// User.deleteOne({name:"adam"}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

//deleteMany()----------------------
// User.deleteMany({age:{$gte:40}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


//findByIdAndDelete()----------------
// User.findByIdAndDelete('67dbfdd3e5c261ddc7d36ed6').then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


//findOneAndDelete()-----------------
// User.findOneAndDelete({name:"Peter"}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })



