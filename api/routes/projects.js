const express = require("express");
const Project = require("../models/Project.js");
const router = express.Router();

router.get('/all-projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json(error);
    }
})

router.get('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;

    try {
        const project = await Project.findById(projectId);
        res.status(200).json(project);
    } catch (error) {
        res.status(404).json(error);
    }
})

router.post('/add-project', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(200).json("Proje başarılı bir şekilde oluşturuldu.");
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/delete-project", async (req, res) => {
    try {
        await Project.findOneAndDelete({ _id: req.body.projectId })
        res.status(200).json("Proje silme işlemi başarılı!");
    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router;