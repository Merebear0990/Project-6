const mongoose = require('mongoose');
const UniqueValidator = require('mongoose-uniqure-validator'); //ensures users cannot share the same email 

const userSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true},
    password: { type: String, require: true, unique: true}
})

userSchema.plugin(UniqueValidator);

mongoose.model.exports = mongoose.model('User', userSchema);