import React, { useState, useEffect } from 'react';
import './AdminProjects.css';

// Mock data for projects
const mockProjects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
];

const AdminProjects = () => {
    const [projects, setProjects] = useState(mockProjects);
    const [newProject, setNewProject] = useState({ title: '', description: '' });
    const [editProject, setEditProject] = useState(null);

    useEffect(() => {
        // In a real app, you can fetch the projects from the API
        // e.g., fetch('/api/projects').then(response => response.json()).then(data => setProjects(data));
    }, []);

    const handleAddProject = (e) => {
        e.preventDefault();
        const newProjectId = projects.length + 1;
        setProjects([...projects, { id: newProjectId, ...newProject }]);
        setNewProject({ title: '', description: '' }); // Clear form after submission
    };

    const handleEditProject = (e) => {
        e.preventDefault();
        const updatedProjects = projects.map(project =>
            project.id === editProject.id ? editProject : project
        );
        setProjects(updatedProjects);
        setEditProject(null); // Clear the edit form after saving
    };

    const handleDeleteProject = (id) => {
        const filteredProjects = projects.filter(project => project.id !== id);
        setProjects(filteredProjects);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (editProject) {
            setEditProject({ ...editProject, [name]: value });
        } else {
            setNewProject({ ...newProject, [name]: value });
        }
    };

    return (
        <div className="admin-projects">
            <h1>Admin Projects</h1>

            {/* Create Project Form */}
            <form onSubmit={editProject ? handleEditProject : handleAddProject} className="project-form">
                <input
                    type="text"
                    name="title"
                    value={editProject ? editProject.title : newProject.title}
                    onChange={handleChange}
                    placeholder="Project Title"
                    required
                />
                <textarea
                    name="description"
                    value={editProject ? editProject.description : newProject.description}
                    onChange={handleChange}
                    placeholder="Project Description"
                    required
                ></textarea>
                <button type="submit">{editProject ? 'Save Changes' : 'Add Project'}</button>
            </form>

            {/* Project List */}
            <div className="project-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button onClick={() => setEditProject(project)}>Edit</button>
                        <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminProjects;