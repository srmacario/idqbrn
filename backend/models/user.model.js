const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        usuario:{type: String,required: true,unique:true},
        senha:{type:String,required:true},
    },
    {collection:'usuarios'}
)
const User = mongoose.model('UserData',UserSchema)
module.exports = User