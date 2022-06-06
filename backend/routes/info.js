const router = require('express').Router();
const { json } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


router.route('/doenca').post(async(req,res)=>{
    console.log("doencaPost")
    console.log(req.body);
    const uri = process.env.ATLAS_URI;
    await  mongoose.connect(uri, {
        useNewUrlParser: true,
        //useCreateIndex: true
    });
    const connection =await  mongoose.connection;
    connection.once('open',async()  => {
        console.log("MongoDB connection estabilished successfully");
        const dado  = await connection.collection("info").findOne({doenca:req.body.doenca});
        //const dado = await connection.collection("info").up;
        console.log(dado);
        await res.json(dado);
        await connection.close();
        console.log('Connection Closes');

        
    });
});

router.route('/').post(async(req, res) => {
    console.log('info***');
    const uri = process.env.ATLAS_URI;
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        //useCreateIndex: true
    });
    const connection =await  mongoose.connection;
    connection.once('open',async()  => {
        console.log("MongoDB connection estabilished successfully");
        if(await (await connection.collection("info").find({doenca:req.body.doenca}).toArray()).length > 0){
            await connection.collection("info").deleteMany({doenca:req.body.doenca});
            
        }
        await connection.collection("info").insertOne(req.body);
        //const dado = await connection.collection("info").up;
        console.log(req.body);
        //await res.json(dado);
        await connection.close();
        console.log('Connection Closes');

        
    });
});
module.exports = router;