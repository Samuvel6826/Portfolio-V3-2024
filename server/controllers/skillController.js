const Skill = require('../models/skillModel');

// Create a new skill category
const createSkillCategory = async (req, res) => {
    try {
        const newSkillCategory = new Skill(req.body);
        await newSkillCategory.save();
        res.status(201).json({ message: 'Skill category created successfully', newSkillCategory });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all skill categories
const getAllSkillCategories = async (req, res) => {
    try {
        const skillCategories = await Skill.find();
        res.status(200).json(skillCategories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single skill category by skillID (query parameter)
const getSkillCategoryById = async (req, res) => {
    try {
        const { skillID } = req.query;  // Extract skillID from query string

        if (!skillID) {
            return res.status(400).json({ message: 'skillID query parameter is required' });
        }

        const skillCategory = await Skill.findOne({ skillID: Number(skillID) });

        if (!skillCategory) {
            return res.status(404).json({ message: 'Skill category not found' });
        }

        res.status(200).json(skillCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a skill category by skillID (query parameter)
const updateSkillCategory = async (req, res) => {
    try {
        const { skillID } = req.query;  // Extract skillID from query string

        if (!skillID) {
            return res.status(400).json({ message: 'skillID query parameter is required' });
        }

        const updatedSkillCategory = await Skill.findOneAndUpdate(
            { skillID: parseInt(skillID, 10) },
            req.body,
            { new: true }
        );

        if (!updatedSkillCategory) {
            return res.status(404).json({ message: 'Skill category not found' });
        }

        res.status(200).json(updatedSkillCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a skill category by skillID (query parameter)
const deleteSkillCategory = async (req, res) => {
    try {
        const { skillID } = req.query;  // Extract skillID from query string

        if (!skillID) {
            return res.status(400).json({ message: 'skillID query parameter is required' });
        }

        const deletedSkillCategory = await Skill.findOneAndDelete({ skillID: parseInt(skillID, 10) });

        if (!deletedSkillCategory) {
            return res.status(404).json({ message: 'Skill category not found' });
        }

        res.status(200).json({ message: 'Skill category deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Export each function separately
module.exports = {
    createSkillCategory,
    getAllSkillCategories,
    getSkillCategoryById,
    updateSkillCategory,
    deleteSkillCategory
};