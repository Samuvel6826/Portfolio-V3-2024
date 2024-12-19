const Project = require('../models/projectModel');

// Create a new project
const createProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).json({ message: 'Project created successfully', newProject });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all projects
const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single project by projectID
const getProjectById = async (req, res) => {
    try {
        const { projectID } = req.query; // Extract projectID from the query parameter

        if (!projectID) {
            return res.status(400).json({ message: 'ProjectID query parameter is required' });
        }

        // Find the project based on projectID
        const project = await Project.findOne({ projectID: parseInt(projectID) });

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a project by projectID
const updateProject = async (req, res) => {
    try {
        const { projectID } = req.query; // Extract projectID from the query parameter

        if (!projectID) {
            return res.status(400).json({ message: 'ProjectID query parameter is required' });
        }

        const updatedProject = await Project.findOneAndUpdate(
            { projectID: parseInt(projectID) },
            req.body,
            { new: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a project by projectID
const deleteProject = async (req, res) => {
    try {
        const { projectID } = req.query; // Extract projectID from the query parameter

        if (!projectID) {
            return res.status(400).json({ message: 'ProjectID query parameter is required' });
        }

        const deletedProject = await Project.findOneAndDelete({ projectID: parseInt(projectID) });

        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Export each function separately
module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
};