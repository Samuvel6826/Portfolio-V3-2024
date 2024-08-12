import express from 'express';
import {
    HeroModel,
    AboutsModel,
    EducationsModel,
    SkillsModel,
    ExperienceModel,
    ProjectsModel,
    ContactModel
} from '../models/portfolioModel.js';

const router = express.Router();

router.get('/get-portfolio-data', async (req, res) => {
    try {
        const hero = await HeroModel.find();
        const abouts = await AboutsModel.find();
        const educations = await EducationsModel.find();
        const skills = await SkillsModel.find()
        const experiences = await ExperienceModel.find();
        const projects = await ProjectsModel.find();
        const contacts = await ContactModel.find();

        res.status(200).send({
            HeroModel: hero[0],
            AboutsModel: abouts[0],
            EducationsModel: educations,
            SkillsModel: skills,
            ExperienceModel: experiences,
            ProjectsModel: projects,
            ContactModel: contacts[0],
        });

    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;