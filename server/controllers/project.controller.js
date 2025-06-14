const Project = require("../models/project.model.js");


exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    if (!projects || projects.length === 0) {
      return res
        .status(200)
        .json({ success: false, message: "No projects found" });
    }
    res.status(200).json({ success: true, projects });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.addProject = async (req, res) => {
//   res.send("Project added successfully");
  const {
    title,
    description,
    githubUrl,
    liveUrl,
    secureUrl,
    publicId,
    deleteToken,
  } = req.body;

//   console.log("req.body :", req.body);

  if (!title || !description) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const newProject =  await Project.create({
      name : title,
      description,
      img: secureUrl,
      githubUrl,
      liveUrl,
      publicUrl : publicId,
      deletedUrl : deleteToken,
    });
   return res
      .status(201)
      .json({
        success: true,
        message: "Project added successfully",
        project: newProject,
      });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.removeProject = async (req, res) => {
  const { projectId } = req.params;

  if (!projectId) {
    return res
      .status(400)
      .json({ success: false, message: "Project ID is required" });
  }

  try {
    const project = await Project.findByIdAndDelete(projectId);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Project removed successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateProject = async (req, res) => {
  const { projectId } = req.params;
  const updatedData = req.body;
//   console.log("get all data :", updatedData);
  const {
    name,
    description,
    githubUrl,
    img,
    liveUrl,
    publicId,
    deleteToken
  } = req.body;
  if (!projectId || !updatedData) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Project ID and updated data are required",
      });
  }

  try {
    // const preProject = await Project.findById(projectId);
    // if (!preProject) {
    //   return res
    //     .status(404)
    //     .json({ success: false, message: "Project not found" });
    // }
    // // check if the "img" property exists in the updated data and has a value
    // if (updatedData.img) {
    //   preProject.img = updatedData.img;
    // }

    // // Directly set the other fields of the project from updatedData
    // for (const key in updatedData) {
    //   if (key !== "img") {
    //     // Skip the img field as it's handled separately
    //     preProject[key] = updatedData[key];

    //   }
    // }
    // // console.log("preProject :", preProject);
    // await preProject.save();

    const project = await Project.findByIdAndUpdate(projectId,{
         name,
    description,
    img,
    githubUrl,
    liveUrl,
    publicId,
    deleteToken
    },{
        new:true
    })
    res
      .status(200)
      .json({
        success: true,
        message: "Project updated successfully",
        project: project,
      });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  const { projectId } = req.params;

  if (!projectId) {
    return res
      .status(400)
      .json({ success: false, message: "Project ID is required" });
  }

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.status(200).json({ success: true, project });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}