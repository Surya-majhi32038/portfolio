const express = require('express');
const { signup, login, logout } = require('../controllers/auth.controller.js');
const { getUser, authUser } = require('../controllers/user.controller.js');
const { verifyToken } = require('../middlewares/VerifyToken.js');
const { refreshToken } = require('../middlewares/RefreshToken.js');
const { checkUser } = require('../middlewares/checkUser.js');
const { getSkills, addSkill, removeSkill } = require('../controllers/skill.controller.js');
const { getProjects, addProject, removeProject, getProjectById, updateProject } = require('../controllers/project.controller.js');
const router = express.Router();

// authentication routes
router.post('/signup', signup);
router.post('/login', login);
router.get("/logout",logout);

// user routes
router.get("/getUser",getUser);
router.get("/authUser",verifyToken, authUser); // Assuming this is for admin user, you might want to change the controller function if needed
router.get("/refresh",refreshToken,verifyToken,authUser); 
router.get("/checkUser",checkUser); // This route checks if the user is logged in and returns user details

// skill routes
router.get('/getSkills', getSkills);
router.post('/addSkill', addSkill); 
router.delete('/removeSkill/:skillId',removeSkill);


// project routes
router.get('/getProjects', getProjects);
router.post('/addProject',addProject);
router.delete('/removeProject/:projectId',removeProject);
router.post('/updateProject/:projectId',updateProject); 
router.get('/getProjectById/:projectId',getProjectById); 


module.exports = router;