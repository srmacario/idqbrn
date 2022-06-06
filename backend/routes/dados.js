const router = require('express').Router();
const { json } = require('express');
const mongoose = require('mongoose');
const csvtojson = require('csvtojson');
const { flushSync } = require('react-dom');
const fs = require('fs');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
require('dotenv').config();




router.route('/update').post(async(req,res) => {
    console.log(req.body);
    const uri = process.env.ATLAS_URI;
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        //useCreateIndex: true
    });
    const connection =await  mongoose.connection;
    connection.once('open',async()  => {
        console.log("MongoDB connection estabilished successfully");
        //await connection.collection("dados").find({Municipio:req.body.Municipio}).update({$set:{}})
        const dado = await connection.collection("dados").findOne({Municipio : req.body.Municipio});
        dado[req.body.Doenca] = req.body.Casos;
        await connection.collection("dados").deleteOne({Municipio:req.body.Municipio});
        await connection.collection("dados").insertOne(dado);
        console.log(dado);
        await connection.close();
        console.log('Connection Closes');

        
    });
});


router.route('/').post(upload.single('myFile'),async (req, res) => {
    console.log(req.file);
    //console.log(req);
    //fs.writeFileSync('server_dados.csv', req.file);
    csvtojson().fromFile(req.file.path)
        .then(csvData => {
            const uri = process.env.ATLAS_URI;
            await mongoose.connect(uri, {
                useNewUrlParser: true,
                //useCreateIndex: true
            });
            const connection =await  mongoose.connection;
            connection.once('open', async () => {
                console.log("MongoDB connection estabilished successfully");
                //console.log(connection.collections);
                if (connection.collections != {})
                    await connection.collection("dados").drop();
                await connection.collection("dados").insertMany(csvData, (err, res) => {
                    if (err) throw err
                    console.log(`Inserted: ${res.insertedCount} rows`);
                })
                await connection.close();
                console.log("Connection closes");
            });
        });
});

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
        const dados = await connection.collection("dados").find().toArray();
        //console.log(dados);
        await res.json(dados);
        await connection.close();
        console.log('Connection Closes');


    });
});

module.exports = router;