// Login for login
let express = require('express');
let mongodb = require('mongodb');
let client = mongodb.MongoClient;

let register= express.Router().post("/",(req,res)=>{
    client.connect("mongodb://localhost:27017/fsd63",(err,db)=>{
        if(err){
            throw err
        }
        else {
            db.collection("Form").insertOne(req.body, (err, result) => {
                if (err) {
                    throw err
                }

                else {
                    res.send("your record has been recorded");
                    // console.log("Registered  Successfully")
                }
            })
        }

    })
    // res.send("data connected")
})

// res.send("fetching data")






module.exports=register;
