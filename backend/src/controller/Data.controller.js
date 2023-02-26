const { client } = require("../config/db");

// database and collection //
const database = client.db("cointab");
const collection = database.collection("fetch");

//fetch the data from api//
exports.fetchData=async(req,res)=>{
    let {data}= req.body;
    try{
        const list= await collection.insertMany(data);
        return res.status(201).send({status:true})

    }
    catch(e){
       return res.status(401).send({status:false})
    }

}

// get the data and pagination //

exports.getData=async(req,res)=>{
    const limit = 10;
    let { page = 1, gender, country } = req.query;
    let filter = {};
    if (gender != "undefined" && !!gender) {
        filter.gender = gender;
    }
    if (country != "undefined" && !!country) {
        filter["location.country"] = country
    }
    try{
        let data = await collection.find(filter).limit(limit).skip((page - 1) * limit);
        
        let result= await data.toArray();
        return res.status(200).send({status:true,message:result})

    }
    catch(e){
        return res.status(401).send({status:false,message:e.message})
    }
}

//Delete the data//

exports.deleteData=async(req,res)=>{
    try{
        const result = await collection.deleteMany({});
        return res.status(200).send({status:true,message:"delete"})
    }
    catch(e){
        return res.status(401).send({status:false,message:e.message}) 
    }
}