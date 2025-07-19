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
          userEmail,
          userPhone,
          owner
    } = req.body;

    if (!userName || !userPosition || !userDes || !secureUrl || !publicId || !deleteToken || !userEmail || !userPhone || !owner) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

   try {
        // Check if the user already exists
    const existingUser = await UserInfo.findOne({ owner: owner });
    if (existingUser) {
        // If the user exists, update their details
        existingUser.userName = userName;
        existingUser.userPosition = userPosition;
        existingUser.userDes = userDes;
        existingUser.userImage = secureUrl;
        existingUser.userGithub = userGithub;
        existingUser.userLinkedin = userLinkedin;
        existingUser.userFacebook = userFacebook || process.env.PORT;
        existingUser.userX = userX || process.env.PORT;
        existingUser.userInsta = userInsta || process.env.PORT;
        existingUser.userYoutube = userYoutube || process.env.PORT;
        existingUser.publicUrl = publicId;
        existingUser.deletedUrl = deleteToken;
        existingUser.userEmail = userEmail;
        existingUser.userPhone = userPhone;
        await existingUser.save();
        return res
          .status(200)
          .json({
            success: true,
            message: "User details updated successfully",
            user: existingUser,
          });
        }
      const newUser =  await UserInfo.create({
         userName:userName,
         userPosition:userPosition,
         userDes:userDes,
          userImage: secureUrl,
         userGithub:userGithub,
         userLinkedin:userLinkedin,
         userFacebook: userFacebook ,
         userX: userX ,
         userInsta: userInsta ,
         userYoutube: userYoutube ,
          publicUrl: publicId,
          deletedUrl: deleteToken,
            userEmail: userEmail,
            userPhone: userPhone,
          owner: owner
      });
     return res
        .status(201)
        .json({
          success: true,
          message: "updated",
          user: newUser,
        });
    } catch (error) {
      return res.status(500).json({ success: false, message: error+"error ocurr when create personal details" });
    }

}

exports.getPersonalDetails = async (req, res) => {
   const userId = req.params.userId
  console.log('userId in getPersonalDetails controller', userId);  
  if (!userId) {
        return res.status(400).json({ success: false, message: "User ID is required" });
    }
  try {
    const user = await UserInfo.findOne({ owner: userId });
    if (!user) {
      return res.status(404).json({ success: false, message: "User details not found" });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
