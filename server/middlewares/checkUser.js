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
            { expiresIn: "30s" }
        );

        // setting the new token in the cookie
        res.cookie("token", newToken, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 30), // 30 seconds
            sameSite: "lax"
        });

        return res.status(200).json({ success: true, message: 'User is logged in',user });
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Error occurred during token verification: ' + error.message });
    }
}