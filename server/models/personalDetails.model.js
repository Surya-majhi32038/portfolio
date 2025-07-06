const mongoose = require('mongoose');

const PersonalDetailsSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userPosition: {
        type:String,
        required: true
    },
    userDes: {
        type: String,
        required: true,
    },
    userImage: {
        type: String,
        required: true,
    },
    userGithub: {
        type: String,
        required: true,
    },
    userLinkedin: {
        type: String,
        required: true,
    },
     userFacebook: {
        type: String,
        required: true,
    },
    userX: {
        type: String,
        required: true,
    },
     userInsta: {
        type: String,
        required: true,
    },
    userYoutube: {
        type: String,
        required: true,
    },
    publicUrl: {
        type: String,
        required: true,
    },
    deletedUrl: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
        match: /.+\@.+\..+/ // Basic email validation regex
    },
    userPhone: {
        type: String,
        required: true,
        match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number']
    },
   owner: {
       type: String,
       required: true // Assuming this is the user ID of the skill owner
    },
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

const UserInfo = mongoose.model('UserInfo', PersonalDetailsSchema); // it stores as projects in the database
module.exports = UserInfo; // Export the model to use it in other files