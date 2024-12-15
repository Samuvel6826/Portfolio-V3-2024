const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');
const { getSkillsLimiter, createSkillLimiter } = require('../middlewares/rateLimiters'); // Import the rate limiters

// GET all skills (with rate limiting)
router.get('/', getSkillsLimiter, skillController.getAllSkillCategories); // Apply rate limiter for GET /skills

// POST create a new skill category (with rate limiting)
router.post('/', createSkillLimiter, skillController.createSkillCategory); // Apply rate limiter for POST /skills

router.get('/:id', skillController.getSkillCategoryById);    // Get skill category by ID
router.put('/:id', skillController.updateSkillCategory);     // Update skill category by ID
router.delete('/:id', skillController.deleteSkillCategory);  // Delete skill category by ID

module.exports = router;