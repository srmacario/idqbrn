const router = require('express').Router();
const { json } = require('express');
const mongoose = require('mongoose');
const csvtojson = require('csvtojson');
const { flushSync } = require('react-dom');
const fs = require('fs');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
require('dotenv').config();


router.route('/').post(upload.single('myFile'),(req, res) => {
    console.log(req.file);
    //console.log(req);
    //fs.writeFileSync('server_dados.csv', req.file);
    csvtojson().fromFile(req.file.path)
        .then(csvData => {
            const uri = process.env.ATLAS_URI;
            mongoose.connect(uri, {
                useNewUrlParser: true,
                //useCreateIndex: true
            });
            const connection = mongoose.connection;
            connection.once('open', async () => {
                console.log("MongoDB connection estabilished successfully");
                //console.log(connection.collections);
                if (connection.collections != {})
                    connection.collection("dados").drop();
                await connection.collection("dados").insertMany(csvData, (err, res) => {
                    if (err) throw err
                    console.log(`Inserted: ${res.insertedCount} rows`);
                    connection.close();
                    console.log("Connection closes");
                })
            });
        });
});

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
        const dados = await connection.collection("dados").find().toArray();
        //console.log(dados);
        await res.json(dados);
        connection.close();
        console.log('Connection Closes');


    });
});

module.exports = router;