/**
 * This is a middleware for the protected API Routes
 */
const jwt        = require('jsonwebtoken');
const config     = require('../config/config')

module.exports = (req, res, next) => {
    token      = req.headers['authorization']
    console.log(token)
    if(!token) return res.status(403).json({ auth: false, msg: 'No token provided.'})
    
    jwt.verify(token, config.keys.supersecret, (err, decoded) => {
        if (err) return res.status(403).json({ auth: false, msg: 'Failed to authenticate the provided token.'});
    
        req.userInfo = decoded;
        console.log(req.userInfo.user._id);
        next();
    })
}
