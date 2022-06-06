const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},
    { collection: 'usuarios' }
);
const User = mongoose.model('UserData', UserSchema);
module.exports = User;