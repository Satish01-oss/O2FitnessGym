const express = require('express');
const userModel = require('../models/auth.model');
const {authMiddleware} = require('../middlewares/auth.middleware');

const router = express.Router();


router.get('/me', authMiddleware, async (req, res) => {

    try {
        const user = await userModel.findById(req.user).select('-password -otp -otpExp');
        if(!user){
            return res.status(404).json({
                message : "User not found"
            })
        }
        res.json(user);
        
    } catch (err) {
        console.log("Invalid token", err.message);
        
        res.status(401).json({ 
            message: 'Unauthorized'
        })
    }
})

module.exports = router;