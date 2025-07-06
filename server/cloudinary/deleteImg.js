// utils/deleteImg.js
const cloudinary = require('cloudinary').v2; // Import Cloudinary SDK
// Cloudinary configuration (configure here directly)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,              // ✅ your Cloudinary cloud name
  api_key: process.env.CLOUDINARY_API_KEY,           // ✅ your Cloudinary API key
  api_secret: process.env.CLOUDINARY_API_SECRET    // ❗ Never expose this on frontend
});

// Delete image function using public_id
exports.deleteImg = async (req,res) => {
    // check .env variables
    if (!process.env.CLOUDINARY_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      return res.status(500).json({ success: false, message: 'Cloudinary configuration is missing' });
    }
    // console.log(process.env.CLOUDINARY_NAME, process.env.API_KEY, process.env.API_SECRET);
    // console.log(req.body); // Log the request body for debugging
    const { publicId } = req.body; // Assuming public_id is sent in the request body
  try {
    if (!publicId) {
      throw new Error('No public_id provided');
    }

    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result !== 'ok') {
      throw new Error(`Failed to delete image: ${result.result}`);
    }

    console.log('✅ Image deleted successfully:', result);
    return result;
  } catch (error) {
    console.error('❌ Error deleting image:', error.message);
    throw error;
  }
};


