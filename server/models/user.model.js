const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    
},{
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

const User = mongoose.model('User', UserSchema);
module.exports = User;