//import User from './models/user.model'
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const csvtojson = require('csvtojson');
const { wait } = require('@testing-library/user-event/dist/utils');
const{User} = require('./models/user.model.js')



//const fs = require('fs');

require('dotenv').config();


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
        console.log(req.body)
        try{
            await User.create(
                {
                    usuario: req.body.usuario,
                    senha: req.body.senha,
                }
                // req.body
            )
            res.json({status: 'ok'})
        }
        catch(err){
            res.json({status: 'error'})
            console.log(err.stack)
        }
        
        // const user = await User.findOne({
        //     usuario: req.body.usuario,
        //     senha: req.body.senha,
        // })
        // if (user)    {
        //     return res.json({status: 'ok',user:true})
        // }


        //res.json({status: 'ok'})    
        

        connection.close();
        console.log('Connection Closes');

        
    });

    
})

const dadosRouter = require('./routes/dados');
app.use('/dados',dadosRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port} `);
    //populate_db("dados.csv");
});

