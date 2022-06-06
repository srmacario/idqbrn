const router = require('express').Router();
const { json } = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//definindo schema e dados de usuario
const UserSchema = new mongoose.Schema(
    {
        email:{type: String, required: true, unique: true},
        password:{type:String, required:true},
    },
    { collection: 'usuarios' }
);
const User = mongoose.model('LoginData', UserSchema);

router.route('/').post(async(req, res) => {
    console.log('login***');
    const uri = process.env.ATLAS_URI;
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        //useCreateIndex: true
    });
    const connection = await mongoose.connection;
    connection.once('open', async () => {
        console.log("MongoDB connection estabilished successfully");
        console.log(req.body)

        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })
        if (user) {
            const token = jwt.sign(
                {
                    email: user.email,
                },
                'segredo123'
            )
            res.json({ status: 'ok', user: token })
        }
        else {
            res.json({ status: 'error', user: false })
        }
        await connection.close();
        console.log('Connection Closes');
    });
});

module.exports = router;