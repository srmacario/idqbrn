const router = require('express').Router();
let Dados = require('../models/Dados');

const { json } = require('express');
const mongoose = require('mongoose');
const csvtojson = require('csvtojson');
const { flushSync } = require('react-dom');
const fs = require('fs');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
require('dotenv').config();

router.route('/').post(upload.single('myFile'), (req, res) => {
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
                })
                await connection.close();
                console.log("Connection closes");
            });
        });
});

router.route('/').get((req, res) => {
    /*console.log('a***');
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
        await connection.close();
        console.log('Connection Closes');
    });*/
    Dados.find()
        .then(dados => res.json(dados))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


/*router.route('/update').post((req, res) => {
    console.log(req.body);

    Dados.findOne({ Municipio: req.body.Municipio }, function (err, element) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Deleted Dado : ", element);
            var newElement = JSON.parse(JSON.stringify(element))
            //element.markModified(req.body.Doenca)
            newElement[req.body.Doenca] = req.body.Casos
            console.log(element)
            const newDado = new Dados(newElement);
            console.log(newDado)
            console.log(newDado);
            newDado.save();
            for (key in element) {

                console.log(element[key])
            }
        }
    });
});*/