const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//signup function
exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // console.log("body",req.body);

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const newUser = await User.create({
            name: username,
            email,
            password: hashedPassword
        });
        // Save the user to the database

        return res.status(201).json({ success: true, message: 'User created successfully', id: newUser._id.toString() });

    } catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        // console.log("in side login function ",user,"user id ",user?._id.toString());
        if (!user) {
            return res.status(400).json({ message: ' sign up ' });
        }
        // Compare the password with the hashed password 
        // console.log("plain password -> ",password," hash password -> ",user.password)   
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check if the user is verified
        const existgingToken = req.cookies.token;

        if (existgingToken) {
            res.clearCookie("token");
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '20m' });
        // Set the token in a cookie    
        res.cookie('token', token, {
            path: '/',
            httpOnly: true,
            maxAge: 2 * 60 * 60 * 1000, // 20 minutes in ms 
            sameSite: 'lax',
            secure: process.env.NODE_ENV === "production", // ✅ secure only in live 
        });
        return res.status(200).json({ success: true, message: 'Login successful', id: user._id.toString() });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }

}

exports.logout = async (req, res) => {
    try {
        res.clearCookie("token");

        res.status(200).json({ success: true, message: "Logged out sccessfully " })
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
}