const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    githubUrl: {
        type: String,
        required: true,
    },
    liveUrl: {
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
   owner: {
       type: String,
       required: true // Assuming this is the user ID of the skill owner
    },

}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

module.exports = mongoose.model('Project', ProjectSchema); // it stores as projects in the database