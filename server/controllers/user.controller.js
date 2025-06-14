const User = require('../models/user.model.js');

// get normal user
exports.getUser = async(res,req) => {
 try {
    const user = await User.findOne().select(" -password -email");
    if(!user) {
        return res
            .status(404)
            .json({success:false,message:"User not found"});
    }
    res.status(200).json({success:true,user})
 } catch (error) {
    return res
        .status(404)
        .json({success:false, message:error.message})
 }
}

// get admin user 
exports.authUser = async(res,req) => {
    const userId = req.id; // Assuming req.id is set by a middleware that verifies the token
    try {
        const user = await User.findById(userId).select("-password");
        return res.status(200).json({success:true, user});
    } catch (error) {
        return res
            .status(404)
            .json({success:false, message:error.message})   
        
    }
}
