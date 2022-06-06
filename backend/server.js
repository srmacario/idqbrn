//import User from './models/user.model'
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const csvtojson = require('csvtojson');
const jwt = require('jsonwebtoken');
const { wait } = require('@testing-library/user-event/dist/utils');

//const fs = require('fs');

require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    //useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//popular o db com doencas
function populate_db(path) {
    csvtojson().fromFile(path)
        .then(csvData => {

            connection.once('open', () => {
                console.log("MongoDB connection estabilished successfully");
                console.log(connection.collections);
                if (connection.collections != {})
                    connection.collection("dados").drop();
                connection.collection("dados").insertMany(csvData, (err, res) => {
                    if (err) throw err
                    console.log(`Inserted: ${res.insertedCount} rows`);
                    connection.close();
                    console.log("Connection closes");
                })
            });
        });
}

const app = express();
const port = process.env.port || 8080;
app.use(cors());
app.use(express.json());

app.post('/update', async (req, res) => {
    console.log(req.body);

    console.log("MongoDB connection estabilished successfully");
    //await connection.collection("dados").find({Municipio:req.body.Municipio}).update({$set:{}})
    const dado = await connection.collection("dados").findOne({ Municipio: req.body.Municipio });
    dado[req.body.Doenca] = req.body.Casos;
    await connection.collection("dados").deleteOne({ Municipio: req.body.Municipio });
    await connection.collection("dados").insertOne(dado);
    console.log(dado);


});

const dadosRouter = require('./routes/dados');
const infoRouter = require('./routes/info');
const elementRouter = require('./routes/element');
const loginRouter = require('./routes/login');
const registerUserRouter = require('./routes/registerUser');
const deleteUserRouter = require('./routes/deleteUser');
const listUsersRouter = require('./routes/listUsers');

app.use('/dados', dadosRouter);
app.use('/info', infoRouter);
app.use('/element', elementRouter);
app.use('/registerUser', registerUserRouter);
app.use('/deleteUser', deleteUserRouter);
app.use('/listUsers', listUsersRouter);
app.use('/login', loginRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port} `);
    //populate_db("dados.csv");
});

