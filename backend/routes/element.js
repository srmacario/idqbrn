const router = require('express').Router();
const { json } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

router.route('/').get((req, res) => {
    console.log('a***');
    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri, {
        useNewUrlParser: true,
        //useCreateIndex: true
    });
    const connection = mongoose.connection;
    connection.once('open', async () => {
        console.log("MongoDB connection estabilished successfully");
        const element = await connection.collection("dados").findOne();
        await res.json(element);
        connection.close();
        console.log('Connection Closes');


    });
});

module.exports = router;