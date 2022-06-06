const router = require('express').Router();
const { json } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//definindo schema e dados de usuario
const UserSchema = new mongoose.Schema(
    {
        email:{type: String, required: true, unique: true},
        password:{type:String, required:true},
    },
    { collection: 'usuarios' }
);
const User = mongoose.model('DeleteData', UserSchema);

router.route('/').post(async(req, res) => {
        console.log('delete***');
        const uri = process.env.ATLAS_URI;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            //useCreateIndex: true
        });
        const connection = await mongoose.connection;
        connection.once('open', async () => {
            console.log("MongoDB connection estabilished successfully");
            try{
                if(req.body.email !== 'admin'){
                    console.log(req.body)
                    const user = await User.deleteOne({
                        email: req.body.email
                    })
        
                    console.log(user)
                    res.json({status: 'ok'})
                }
                else{
                    res.json({status: 'admin'})
                }
            }
            catch (err) {
                res.json({ status: 'error' })
                console.log(err.stack)
            }
            await connection.close();
            console.log('Connection Closes');
        });
});

module.exports = router;