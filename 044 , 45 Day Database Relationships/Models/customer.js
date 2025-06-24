//MongoDb Relationship : Level ---> 2







const mongoose = require('mongoose');
const {Schema} = mongoose;
main().then(()=>{
    console.log('Connection successful');
}).catch((err)=>{
    console.log(err)
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/MongoRelationships");
}




//JOINING TWO TABLES



const orderSchema = new Schema({
    item  : String,
    price : Number,
});


const customerSchema = new Schema({             //Joining two tables
    name : String,
    orders: [
        {
            type : Schema.Types.ObjectId,       //to store _id of other document
            ref : "Order"                       //reference of collection name of the document
        }
    ]
});


// ----------------------------------------

//Middleware for handing deletion : Day 45

customerSchema.pre("findOneAndDelete", async(customer)=>{  //here argument in the async() is the document that is to be deleted

})

customerSchema.post("findOneAndDelete", async(customer)=>{  //here argument in the async() is the document that is to be deleted
    if(customer.orders.length){
        let res = await Order.deleteMany({_id : {$in : customer.orders}})
    }
})

// -----------------------------------------------


const  Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model("Customer", customerSchema);



//ADDING DATA TO THE DATABASE




const addOrders = async ()=>{
    let res = await Order.insertMany([
        {item:"Samosa"  , price :12 },
        {item: "Chips" , price :10 },
        {item: "Chocolate" , price :40 }
    ])
}

const addCustomer = async ()=>{
    let cust1 = new Customer({
        name : "Rahul Kumar",
    });
    let order1 = await Order.findOne({item:"Chips"});
    let order2 = await Order.findOne({item:"Chocolate"});
    
    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);
}

// addOrders().then(()=>{
//     addCustomer();
// })





//EXTRAXTING DATA FROM DATABASE

//Extrating data with only mongo id of orders
// const findCustomer = async()=>{
//     let result = await Customer.find({});
//     console.log(result)
// }

//populate("field_name_that_is_to_be_populated") : Extrating data with mongo id with all detaiils of orders

const findCustomer = async()=>{
    let result = await Customer.find({}).populate("orders");
    console.log("find Customer : ",result)
}

// findCustomer();



// ----------------------------

//HANDING DELETION : Day 45

const addCust = async () =>{
    let newCust = new Customer({
        name : "Karan Arjun"
    })

    let newOrder = new Order({
        item : "Pizza",
        price : 250 ,
    })

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("Added new customer")

}
//addCust();

const delCust = async()=>{
    let data = await Customer.findByIdAndDelete("680624c9c0c24c1e9e648670");
    console.log(data);
}

delCust();

// -----------------------------------------
