//MongoDb Relationship : Level ---> 3







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


//Schema Definition

const userSchema= new Schema({
    username : String,
    email : String
});


const postSchema = new Schema({
    content : String,
    likes : Number,
    user: {
        type : Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model('Post', postSchema);



//Adding Data



const addData = async()=>{
    let user1 = new User({
        username : "rahulkumar",
        email : "rahul@gmail.com"
    })

    //First Post
    let post1 = new Post({
        content : "hello world!",
        likes : 7 ,
    })
    post1.user = user1;

    //Second Post
    let post2 = new Post({
        content : "hello world!",
        likes : 7 ,
    })
    post2.user = user1;


    await user1.save();
    await post1.save();
    await post2.save();

}



// Extracting Data

const getData = async()=>{
    let Data = await Post.find({}).populate("user");
    console.log(Data);
}

const getData1 = async()=>{
    let Data = await Post.find({}).populate("user" , "email"); // in this extraction of data user field will be
    // populated and the populated object will have only mongoId and email. We can have only two parameters 
    //in the "populate()"
    console.log(Data);
}





// Function Call for adding and extracting the data

//addData().then(()=>getData());\
getData1()
