const mongoose = require('mongoose');

const mongooseURI = "mongodb://localhost:27017/";

const connectTOmongoose = ()=>{
    mongoose.connect(mongooseURI,()=>{
        console.log("connected to mongoose succesfully!");
    })
}

module.exports = connectTOmongoose;