const mongoose = require('mongoose');

async function connection(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/WanderNest')
        console.log('Database connected')
    }catch(err){
        console.log(err.message);
    }
}

module.exports = connection;