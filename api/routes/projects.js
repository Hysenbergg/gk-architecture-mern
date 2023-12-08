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

router.post('/add-project', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(200).json("Project added successfully");
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;