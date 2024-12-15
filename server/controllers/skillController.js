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

// Get a single skill category by ID
const getSkillCategoryById = async (req, res) => {
    try {
        const skillCategory = await Skill.findById(req.params.id);
        if (!skillCategory) {
            return res.status(404).json({ message: 'Skill category not found' });
        }
        res.status(200).json(skillCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a skill category by ID
const updateSkillCategory = async (req, res) => {
    try {
        const updatedSkillCategory = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSkillCategory) {
            return res.status(404).json({ message: 'Skill category not found' });
        }
        res.status(200).json(updatedSkillCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a skill category by ID
const deleteSkillCategory = async (req, res) => {
    try {
        const deletedSkillCategory = await Skill.findByIdAndDelete(req.params.id);
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