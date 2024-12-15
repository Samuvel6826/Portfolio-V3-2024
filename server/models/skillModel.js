const mongoose = require('mongoose');
const { getFormattedDate } = require('../utils/utilities'); // Import the date utility function

// Define the Skill categories enum
const skillCategories = ['Frontend', 'Backend', 'Full Stack', 'DevOps', 'Data Science', 'Mobile Development', 'UI/UX Design', 'Other'];

// Define the Skills schema
const skillSchema = new mongoose.Schema({
    skillID: {
        type: Number,
        required: true,
        unique: true // Ensure skillID is unique
    },
    category: {
        type: String,
        required: true,
        enum: skillCategories // Add enum validation
    }, // Skill category (e.g., frontend, backend, etc.)
    skills: [
        {
            name: {
                type: String,
                required: true
            }, // Skill name (e.g., HTML, CSS)
            link: {
                type: String,
                required: true
            }, // Link to documentation/resource
            imageUrl: {
                type: String,
                required: true
            }, // URL for the skill image
            level: {
                type: String,
                required: true,
                enum: ['Basic', 'Intermediate', 'Advanced']
            } // Proficiency level
        }
    ],
    createdAt: {
        type: String,
        default: getFormattedDate // Use your utility function
    },
    updatedAt: {
        type: String,
        default: getFormattedDate // Automatically update on creation
    }
});

// Middleware to update `updatedAt` field automatically
skillSchema.pre('save', function (next) {
    this.updatedAt = getFormattedDate();
    next();
});

// Create the Skills model
const Skill = mongoose.model('Skills', skillSchema);

module.exports = Skill;