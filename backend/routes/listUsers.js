const router = require('express').Router();
const { json } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

router.route('/').get((req, res) => {
    console.log('users***');
    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri, {
        useNewUrlParser: true,
        //useCreateIndex: true
    });
    const connection = mongoose.connection;
    connection.once('open',async()  => {
        console.log("MongoDB connection estabilished successfully");
        const dados = await connection.collection("usuarios").find().toArray();
        await res.json(dados);
        connection.close();
        console.log('Connection Closes');        
    });
});

module.exports = router;