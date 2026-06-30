const express = require('express');
const { authMiddleware } = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/logout' , authMiddleware , (req , res) =>{
    res.clearCookie('token' , {
        httpOnly : true,
        secure : false
    })
    res.json({
        message : 'Logged out successfully'
    })
})

module.exports = router;