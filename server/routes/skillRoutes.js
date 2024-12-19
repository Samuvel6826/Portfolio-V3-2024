const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');
const { getSkillsLimiter, createSkillLimiter } = require('../middlewares/rateLimiters'); // Import the rate limiters

// GET all skill categories (with rate limiting)
router.get('/', getSkillsLimiter, skillController.getAllSkillCategories); // Apply rate limiter for GET /skills

// POST create a new skill category (with rate limiting)
router.post('/', createSkillLimiter, skillController.createSkillCategory); // Apply rate limiter for POST /skills

// GET a single skill category by skillID from query
router.get('/single', skillController.getSkillCategoryById);  // Changed route to '/single'

// PUT update a skill category by skillID from query
router.put('/', skillController.updateSkillCategory);  // Use query to get skillID for update

// DELETE a skill category by skillID from query
router.delete('/', skillController.deleteSkillCategory);  // Use query to get skillID for delete

module.exports = router;