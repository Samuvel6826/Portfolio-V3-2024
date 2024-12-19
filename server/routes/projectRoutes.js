// routes/projectRoutes.js

const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { getProjectsLimiter, createProjectLimiter } = require('../middlewares/rateLimiters'); // Import the rate limiters

// GET all projects (with rate limiting)
router.get('/', getProjectsLimiter, projectController.getAllProjects); // Apply rate limiter for GET /projects

// POST create a new project (with rate limiting)
router.post('/', createProjectLimiter, projectController.createProject); // Apply rate limiter for POST /projects

router.get('/single', projectController.getProjectById);   // Get project by ID
router.put('/', projectController.updateProject);    // Update project by ID
router.delete('/', projectController.deleteProject); // Delete project by ID

module.exports = router;