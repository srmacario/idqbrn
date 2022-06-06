//import User from './models/user.model'
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const csvtojson = require('csvtojson');
const jwt = require('jsonwebtoken')
const { wait } = require('@testing-library/user-event/dist/utils');

//const fs = require('fs');

require('dotenv').config();

//definindo schema e dados de usuario
const UserSchema = new mongoose.Schema(
    {
        email:{type: String, required: true, unique: true},
        password:{type:String, required:true},
    },
    {collection:'usuarios'}
);
const User = mongoose.model('UserData',UserSchema);


//popular o db com doencas
function populate_db(path) {
    csvtojson().fromFile(path)
        .then(csvData => {
            const uri = process.env.ATLAS_URI;
            mongoose.connect(uri, {
                useNewUrlParser: true,
                //useCreateIndex: true
            });
            const connection = mongoose.connection;
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

//register route
app.post('/api/register', (req, res) => {
    console.log('a***');
    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri, {
        useNewUrlParser: true,
        //useCreateIndex: true
    });
    const connection = mongoose.connection;
    connection.once('open',async()  => {
        console.log("MongoDB connection estabilished successfully");
        try{
            
        console.log(req.body)
            const user = new User(
                {
                    email: req.body.email,
                    password: req.body.password,
                }
            )

            await user.save()

            console.log(user)
            res.json({status: 'ok'})
        }
        catch(err){
            res.json({status: 'error'})
            console.log(err.stack)
        }
        connection.close();
        console.log('Connection Closes');
    });
})

//login route
app.post('/api/login', (req, res) => {
    console.log('a***');
    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri, {
        useNewUrlParser: true,
        //useCreateIndex: true
    });
    const connection = mongoose.connection;
    connection.once('open',async()  => {
        console.log("MongoDB connection estabilished successfully");
        console.log(req.body)
        
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })
        if (user)    {
            const token = jwt.sign(
                {
                    email: user.email,
                },
                'segredo123'
            )
            res.json({status: 'ok', user: token})
        }
        else{
            res.json({status: 'error', user: false})
        } 
        connection.close();
        console.log('Connection Closes');
    });
})

const dadosRouter = require('./routes/dados');
const infoRouter  = require('./routes/info');
app.use('/dados',dadosRouter);
app.use('/info',infoRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port} `);
    //populate_db("dados.csv");
});

