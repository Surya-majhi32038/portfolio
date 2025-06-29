const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: true,
    },    
    level: {
        type: Number,
        required: true
    },
    owner: {
       type: String,
       required: true // Assuming this is the user ID of the skill owner
    },
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

module.exports = mongoose.model('Skill', SkillSchema); // it stores as skills in the database