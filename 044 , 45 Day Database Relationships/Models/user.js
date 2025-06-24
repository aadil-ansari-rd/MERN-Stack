//MongoDb Relationship : Level ---> 1







const mongoose = require('mongoose');
const {Schema} = mongoose;
main().then(()=>{
    console.log('Connection successful');
}).catch((err)=>{
    console.log(err)
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/MongoRelationships")
}


//Relationship : One to many




//Approach 1 : One to few

// const userSchema = new Schema({
//     username : String,
//     addresses : [
//         {
//             location : String,
//             city : String
//         },
//         //Each address object in the array will have its unique mongodb id inside the user schema
//     ],
// })


const userSchema = new Schema({
    username : String,
    addresses : [
        {
            _id : false ,
            location : String,
            city : String
        },
        //Each address object in the array will not have any mongodb id inside the user schema
    ],
})

const User = mongoose.model('User', userSchema);

const addUsers = async () =>{
     let user1 = new User({
        username : "Sheru",
        addresses:[
            {
                location : "221B Baker Street",
                city  : "London"
            },
        ] 
     })
     user1.addresses.push({location : "P3 Tower", city : "London"})
     let result = await user1.save();
     console.log(result)
}

addUsers();