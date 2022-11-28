const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    firstname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    is_admin: { type: String, default: 'ROLE_USER' }
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);