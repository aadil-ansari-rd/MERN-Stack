const mongoose = require('mongoose');
const timestamps = require("mongoose-timestamps");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: { type: String },
    image: {
        type: String,
        default : "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => v === "" ? "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
    },
    price: {
        type: Number
    },
    location: { type: String },
    country: { type: String },
    createdAt: Date,
    updatedAt: Date,
})
ListingSchema.plugin(timestamps, { index: true });
module.exports = mongoose.model('Listing', ListingSchema);