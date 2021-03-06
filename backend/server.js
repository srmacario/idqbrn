//import User from './models/user.model'
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const csvtojson = require('csvtojson');
const jwt = require('jsonwebtoken');
const fs = require('fs');
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
    const dado = await connection.collection("dados").findOne({ IBGE7: req.body.IBGE7 });
    dado[req.body.Doenca] = req.body.Casos;
    try {
        await connection.collection("dados").deleteOne({ IBGE7: req.body.IBGE7 });
        await connection.collection("dados").insertOne(dado);
        res.json({ status: "ok" })
    }
    catch (err) {
        res.json({ status: "error" })
    }
});

app.post('/updatecsv', upload.single('myFile'), async (req, resPai) => {
    console.log(req.file);
    csvtojson().fromFile(req.file.path)
        .then(async csvData => {
            if (connection.collections != {})
                connection.collection("dados").drop();
            await connection.collection("dados").insertMany(csvData, (err, res) => {
                if (err) {
                    resPai.json({ status: "error" })
                    throw err
                }
                console.log(`Inserted: ${res.insertedCount} rows`);
                resPai.json({ status: "ok" })
            })
        });
});

app.get('/downloadcsv', async (req, res) => {
    const dado = await connection.collection("dados").findOne();
    var header = Object.keys(dado);
    var idIndex = header.indexOf("_id");
    header.splice(idIndex, 1);
    console.log(header.toString());
    var line = header.toString() + '\n';
    fs.writeFileSync("database.csv", line, function (err) {
        if (err) throw err
        console.log("Saved header!");
    });
    line = "";
    await connection.collection("dados").find().forEach(doc => {
        for (let i = 0; i < header.length; i++) {
            if(doc[header[i]].toString().includes(",")) line += '\"' + doc[header[i]].toString() + '\"';
            else line += doc[header[i]].toString();
            if (i != header.length - 1) line += ',';
        }
        line += '\n';
    });
    fs.appendFileSync("database.csv", line, err =>{
        if(err) throw err
        console.log("Saved data!");
    })
    await res.sendFile("/database.csv",{
        root: './'
    });
    console.log("sent!");

});

const dadosRouter = require('./routes/dados');
const infoRouter = require('./routes/info');
const elementRouter = require('./routes/element');
const loginRouter = require('./routes/login');
const registerUserRouter = require('./routes/registerUser');
const deleteUserRouter = require('./routes/deleteUser');
const listUsersRouter = require('./routes/listUsers');
const { head } = require('./routes/dados');

app.use('/dados', dadosRouter);
app.use('/info', infoRouter);
app.use('/element', elementRouter);
app.use('/registerUser', registerUserRouter);
app.use('/deleteUser', deleteUserRouter);
app.use('/listUsers', listUsersRouter);
app.use('/login', loginRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port} `);
});

