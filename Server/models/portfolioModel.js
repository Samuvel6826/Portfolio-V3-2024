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
},
    { versionKey: false });

// Define the Abouts schema
const AboutsSchema = new mongoose.Schema({
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
},
    { versionKey: false });

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
},
    { versionKey: false });

// Define the Skills schema
const SkillsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    desktopSkillIconHeight: {
        type: String,
        required: true
    },
    desktopSkillIconWidth: {
        type: String,
        required: true
    },
    mobileSkillIconHeight: {
        type: String,
        required: true
    },
    mobileSkillIconWidth: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['frontend', 'backend', 'others']
    }
},
    { versionKey: false });

// Define the Experiences schema
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
},
    { versionKey: false });

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
},
    { versionKey: false });

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
},
    { versionKey: false }
);

// Create models from the schemas
const HeroModel = mongoose.model('hero', HeroSchema);
const AboutsModel = mongoose.model('abouts', AboutsSchema);
const EducationsModel = mongoose.model('educations', EducationsSchema);
const SkillsModel = mongoose.model('skills', SkillsSchema);
const ExperienceModel = mongoose.model('experiences', ExperienceSchema);
const ProjectsModel = mongoose.model('projects', ProjectsSchema);
const ContactModel = mongoose.model('contact', ContactSchema);

// Export the models
export {
    HeroModel,
    AboutsModel,
    EducationsModel,
    SkillsModel,
    ExperienceModel,
    ProjectsModel,
    ContactModel
};