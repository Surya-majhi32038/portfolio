const User = require('../models/user.model.js');
const UserInfo = require('../models/personalDetails.model.js');
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

exports.updatePersonalDetails = async(req,res) => {
    console.log('inside the updatePersonalDetails controller', req.body);
    const {
        userName,
         userPosition,
         userDes,
         userGithub,
         userLinkedin,
         userFacebook,
         userX,
         userInsta,
         userYoutube,
          secureUrl,
          publicId,
          deleteToken,
          id
    } = req.body;

    if (!userName || !userPosition || !userDes || !secureUrl || !publicId || !deleteToken) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

   try {
      const newUser =  await UserInfo.create({
         userName:userName,
         userPosition:userPosition,
         userDes:userDes,
          userImage: secureUrl,
         userGithub:userGithub,
         userLinkedin:userLinkedin,
         userFacebook: userFacebook || process.env.PORT,
         userX: userX || process.env.PORT,
         userInsta: userInsta || process.env.PORT,
         userYoutube: userYoutube || process.env.PORT,
          publicUrl: publicId,
          deletedUrl: deleteToken,
          owner: id
      });
     return res
        .status(201)
        .json({
          success: true,
          message: "User Update are successfully",
          project: newUser,
        });
    } catch (error) {
      return res.status(500).json({ success: false, message: "error ocurr when create personal details " });
    }

}
