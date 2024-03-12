let express = require('express');
let mongodb = require('mongodb');
let client = mongodb.MongoClient;

let fetch = express.Router().put("/:name",(req,res)=>{
    client.connect("mongodb://localhost:27017/fsd63",(err,db)=>{
        if(err){
            throw err
        }
        else{
            db.collection("company").updateOne({name:req.params.name},{$set:req.body},(err,result)=>{   //dynamically
            // db.collection("company").updateOne({name:"Satwick"},{$set:{"language":"nodejs"}} ,(err,result)=>{
                if(err){
                    throw err
                }
                else{
                    res.send(result)
                }
            })
            // res.send("data connected")
        }
    })
    // res.send("fetching data")

})


            
               
module.exports = fetch;

// deleteOne({id:parseInt(req.params.id)},(err,result)=>{
