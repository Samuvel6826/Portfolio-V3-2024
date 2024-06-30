import mongoose from 'mongoose';

// Define the Hero schema
const HeroSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// Define the About schema
const AboutSchema = new mongoose.Schema({
    lottieURL: {
        type: String,
        required: true
    },
    description1: {
        type: String,
        required: true
    },
    description2: {
        type: String,
        required: true
    }
});

// Define the Experience schema
const ExperienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// Define the Projects schema
const ProjectsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    siteLink: {
        type: String,
        required: true
    },
});

// Define the Educations schema
const EducationsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
});

// Define the Contact schema
const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
});

// Create models from the schemas
const HeroModel = mongoose.model('Hero', HeroSchema);
const AboutModel = mongoose.model('About', AboutSchema);
const ExperienceModel = mongoose.model('Experience', ExperienceSchema);
const ProjectsModel = mongoose.model('Projects', ProjectsSchema);
const EducationsModel = mongoose.model('Educations', EducationsSchema);
const ContactModel = mongoose.model('Contact', ContactSchema);

// Export the models
export {
    HeroModel,
    AboutModel,
    ExperienceModel,
    ProjectsModel,
    EducationsModel,
    ContactModel
};