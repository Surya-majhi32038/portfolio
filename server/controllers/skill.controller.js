const Skill = require("../models/skill.model.js");

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    // console.log("skills :", skills);
    if (!skills || skills.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "No skills found",skills: [] });
    }
    res.status(200).json({ success: true, skills });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.addSkill = async (req, res) => {
  const { skill, level } = req.body;
  // console.log("req.body :", typeof(parseInt(level)));
  if (!skill || !level) {
    return res
      .status(400)
      .json({ success: false, message: "Skill and level are required" });
  }

  try {
    const newSkill = await Skill.create({ skill, level: parseInt(level) });
    res
      .status(201)
      .json({
        success: true,
        message: "Skill added successfully",
        skill: newSkill,
      });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.removeSkill = async (req, res) => {
  const { skillId } = req.params;

  if (!skillId) {
    return res
      .status(400)
      .json({ success: false, message: "Skill ID is required" });
  }

  try {
    const skill = await Skill.findByIdAndDelete(skillId);
    if (!skill) {
      return res
        .status(404)
        .json({ success: false, message: "Skill not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Skill removed successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
