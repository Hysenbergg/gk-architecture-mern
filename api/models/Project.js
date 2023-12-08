const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
  {
    title: { type: String, required: true, maxlength: 60 },
    images: [{ type: String, required: true }],
    category: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("projects", ProjectSchema);
module.exports = Project;
