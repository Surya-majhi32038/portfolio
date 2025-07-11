const jwt = require('jsonwebtoken');

exports.checkUser = (req, res, next) => {
    try {
        const {token} = req.cookies;
        
        if (!token) {
            return res.status(401).json({ success: false, message: 'Please Login First' });
        }

        // verify the token
        const user = jwt.verify(token, process.env.JWT_SECRET);

        // clear the previous token

        res.clearCookie("token");

        // creating a new token
        const newToken = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '20m' } // default to 20m if not set
        );

        // setting the new token in the cookie
        res.cookie("token", newToken, {
            path: "/",
            httpOnly: true,
            maxAge: 2 * 60 * 60 * 1000, // 20 minutes in ms
            sameSite: "None", // 'None' for cross-site cookies, 'Lax' for same-site cookies
            secure: true // ✅ secure only in live
        });

        return res.status(200).json({ success: true, message: 'User is logged in',user });
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Error occurred during token verification: ' + error.message });
    }
}