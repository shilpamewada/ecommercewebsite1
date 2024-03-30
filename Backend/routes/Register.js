let express = require('express');
let mongodb = require('mongodb');
let client = mongodb.MongoClient;

let register = express.Router().post("/", (req, res) => {
    const password = req.body.password;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!(hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar)) {
        res.status(400).send("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
        return;
    }

    if (req.body.password !== req.body.confirmpassword) {
        res.status(400).send("Passwords do not match.");
        return;
    }

    if (!req.body.agree) { // Check if agree is false
        res.status(400).send("Please agree with the terms and conditions to register.");
        return;
    }

    client.connect("mongodb://localhost:27017/fsd63", (err, db) => {
        if (err) {
            throw err;
        } else {
            db.collection("company").insertOne(req.body, (err, result) => {
                if (err) {
                    throw err;
                } else {
                    res.send("Registered Successfully");
                }
            });
        }
    });
});


module.exports = register;
