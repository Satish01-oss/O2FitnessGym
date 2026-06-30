const jwt = require('jsonwebtoken')
const authModel = require('../models/auth.model')

async function authMiddleware(req , res , next) {
    
    try {
        const token = req.cookies.token;

        if(!token) {
            return res.status(401).send({ 
                message: 'User not found' 
            });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);
        const user = await authModel.findById(decode.id).select('-password');


        if(!user) {
            return res.status(401).send({ 
                message: 'User not found' 
            });
        }

        req.user = decode.id;
        next();
    } catch (err) {
        return res.status(401).send({ 
            message: 'Invalid or expired token' 
        });
    }
}

module.exports = {authMiddleware};