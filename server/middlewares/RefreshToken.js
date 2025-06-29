const jwt = require('jsonwebtoken');

exports.refreshToken = (req, res, next) => {
    try {
        const cookies = req.headers.cookie;
        const preToken = cookies?.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

        if (!preToken) {
            return res.status(401).json({ success: false, message: 'No token provided' });
        }

        jwt.verify(preToken, process.env.JWT_SECRET, (error, user) => {
            if (error) return res.status(403).json({ success: false, message: error.message });

            res.clearCookie("token");

            const newToken = jwt.sign(
                { id: user.id },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN || '20m' }
            );

            res.cookie("token", newToken, {
                path: "/",
                httpOnly: true,
                expires: new Date(Date.now() + 1000 * 60 * 20), // 20 minutes
                sameSite: "lax"
            });

            req.id = user.id;
            next();
        });
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Error occurred during token refresh: ' + error.message });
    }
};
