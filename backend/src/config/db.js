const mongoose= require("mongoose");

// connect our database to mongodb atlas
 const connect=async()=>{
    mongoose.set('strictQuery',true)
    return  mongoose.connect(process.env.DB_URL)
 }

 // connect with mongoClient"
 const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DB_URL);


 module.exports= {connect,client}