const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); //ensures users cannot share the same email 

const userSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true }
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);