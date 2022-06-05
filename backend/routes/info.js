const router = require('express').Router();
const { json } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

router.route('/').post((req, res) => {
    console.log('info***');
    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri, {
        useNewUrlParser: true,
        //useCreateIndex: true
    });
    const connection = mongoose.connection;
    connection.once('open',async()  => {
        console.log("MongoDB connection estabilished successfully");
        if(await connection.collection("info").findOne({doencaNome:req.body.doencaNome}).count === 0){
            await connection.collection("info").deleteOne({doencaNome:req.body.doencaNome});
        }
        await connection.collection("info").insertOne(req.body);
        //const dado = await connection.collection("info").up;
        console.log(req.body);
        //await res.json(dado);
        connection.close();
        console.log('Connection Closes');

        
    });
});
