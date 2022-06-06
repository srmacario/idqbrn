const router = require('express').Router();
const { json } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

router.route('/').get(async(req, res) => {
    console.log('a***');
    const uri = process.env.ATLAS_URI;
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        //useCreateIndex: true
    });
    const connection =await  mongoose.connection;
    connection.once('open', async () => {
        console.log("MongoDB connection estabilished successfully");
        const element = await connection.collection("dados").findOne();
        await res.json(element);
        await connection.close();
        console.log('Connection Closes');


    });
});

module.exports = router;