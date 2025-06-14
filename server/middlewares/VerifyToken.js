const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        // Check if token is provided

        if (!token) {
            return res.status(401).json({ success: false, message: 'No token provided' });
        }

        // Verify the token
        const user = jwt.verify(token, process.env.JWT_SECRET,(error,user) => {
            if(error) return res.status(403).json({success:false,message:error.message});

            // clear the previous token
            res.clearCookie("token");

            // creating a new token 
            const newToken = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
                expiresIn: "30s"
            })
        });
        
        req.id = user.id; // Attach user ID to the request object

        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'error occure during Verify Token' });
    }
}

exports.verifyToken = verifyToken;