const jwt = require('jsonwebtoken');

exports.refreshToken = (req, res) => {
    try {
        const cookeies = req.headers.cookie;
        const preToken = cookeies.split('=')[1]; // Assuming the cookie is named 'token'

        // Check if the token exists
        if(!preToken) {
            return res.status(401).json({ success: false, message: 'No token provided' });
        }
        // Verify the token
         jwt.verify(preToken,process.env.JWT_SECRET,(error,user) => {
            if(error) return res.status(403).json({success:false,message:error.message});

            // clear the previous token
            res.clearCookie("token");

            // creating a new token
            const newToken = jwt.sign(
                {
                    id:user.id
                },
                process.env.JWT_SECRET,
                {
                    expiresIn:"30s"
                }
            )
         });

         res.cookeie("token",newToken,{
            path:"/",
            httpOnly: true,
            expiresIn : new Date(Date.now() + 100 * 30),
            sameSite: "lax"
         })

         req.id = user.id;
         next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Error occurred during token refresh:'+error.message });
    }
}