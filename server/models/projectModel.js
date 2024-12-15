const mongoose = require('mongoose');
const { getFormattedDate } = require('../utils/utilities'); // Import the date utility function

// Define the Projects schema
const projectSchema = new mongoose.Schema({
  projectID: {
    type: Number,
    required: true,
    unique: true // Ensure projectID is unique
  },
  name: {
    type: String,
    required: [true, 'Project name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true
  },
  imgUrl: {
    type: String,
    required: [true, 'Image URL is required'],
    validate: {
      validator: (url) => {
        const urlPattern = /^(http|https):\/\/[^ "]+$/; // Basic URL validation
        return urlPattern.test(url);
      },
      message: 'Invalid URL format for the image'
    }
  },
  siteLink: {
    type: String,
    required: [true, 'Site link is required'],
    validate: {
      validator: (url) => {
        const urlPattern = /^(http|https):\/\/[^ "]+$/; // Basic URL validation
        return urlPattern.test(url);
      },
      message: 'Invalid URL format for the site link'
    }
  },
  category: {
    type: String,
    required: true,
    enum: ['CRUD Operations', 'Games & Fun', 'Utilities', 'Data Management'], // Category field with possible values
    trim: true
  },
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
projectSchema.pre('save', function (next) {
  this.updatedAt = getFormattedDate();
  next();
});

// Create the Projects model
const Project = mongoose.model('Projects', projectSchema);

module.exports = Project;