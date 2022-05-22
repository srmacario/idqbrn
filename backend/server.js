const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const csvtojson = require('csvtojson');

require('dotenv').config();





console.log("a\n");
csvtojson().fromFile("dados.csv")
    .then(csvData => {
        console.log("b\n");
        const uri = process.env.ATLAS_URI;
        mongoose.connect(uri, {
            useNewUrlParser: true,
            //useCreateIndex: true
        });
        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log("MongoDB connection estabilished successfully");
            console.log(connection.collections);
            connection.collection("dados").drop();
            connection.collection("dados").insertMany(csvData, (err, res) => {
                if (err) throw err
                console.log(`Inserted: ${res.insertedCount} rows`);
                connection.close();
                console.log("Connection closes");
            })
        });
    });




const app = express();
const port = process.env.port || 8080;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port: ${port} `);
});
