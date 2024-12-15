const rateLimit = require('express-rate-limit');

// Define rate limits for project routes
const projectRateLimits = {
    getProjects: { requests: 100, timeFrame: 15 },   // Allow 100 requests within 15 minutes
    createProject: { requests: 10, timeFrame: 15 },  // Allow 10 requests to create a project within 15 minutes
};

// Define rate limits for skill routes
const skillRateLimits = {
    getSkills: { requests: 50, timeFrame: 15 },     // Allow 50 requests within 15 minutes
    createSkill: { requests: 5, timeFrame: 15 },    // Allow 5 requests to create a skill within 15 minutes
};

// Create rate limiters for project routes
const getProjectsLimiter = rateLimit({
    windowMs: projectRateLimits.getProjects.timeFrame * 60 * 1000, // 15 minutes in ms
    max: projectRateLimits.getProjects.requests,  // Max requests
    message: 'Too many requests to fetch projects, please try again later.',
});

const createProjectLimiter = rateLimit({
    windowMs: projectRateLimits.createProject.timeFrame * 60 * 1000, // 15 minutes in ms
    max: projectRateLimits.createProject.requests,  // Max requests
    message: 'Too many project creation requests, please try again later.',
});

// Create rate limiters for skill routes
const getSkillsLimiter = rateLimit({
    windowMs: skillRateLimits.getSkills.timeFrame * 60 * 1000, // 15 minutes in ms
    max: skillRateLimits.getSkills.requests,  // Max requests
    message: 'Too many requests to fetch skills, please try again later.',
});

const createSkillLimiter = rateLimit({
    windowMs: skillRateLimits.createSkill.timeFrame * 60 * 1000, // 15 minutes in ms
    max: skillRateLimits.createSkill.requests,  // Max requests
    message: 'Too many skill creation requests, please try again later.',
});

module.exports = {
    getProjectsLimiter,
    createProjectLimiter,
    getSkillsLimiter,
    createSkillLimiter,
};