const jwt = require('jsonwebtoken')
const authModel = require('../models/auth.model');
const bcrypt = require('bcrypt');
const authController = require('../controllers/auth.controller');

async function verifyOtp(req, res) {
    const { email, otp } = req.body;
    
    const pending = authController.pendingUser[email];

    if (!pending) {
        return res.status(400).send({ message: 'User not found' });
    }

    if (pending.otp !== otp) {
        return res.status(400).send({ message: 'Invalid OTP' });
    }

    if (pending.otpExp < Date.now()) {
        return res.status(400).send({ message: 'OTP expired' });
    }
    try {

    const hashPass = await bcrypt.hash(pending.password, 10);


        const user = await authModel.create({ 
            email : pending.email,
            userName: pending.userName , 
            password: hashPass,
            verified: true 
        });

        delete authController.pendingUser[email];
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY)

        

        res.cookie('token', token, {
            httpOnly: true,
            secure: false
        })

        res.status(201).send({ success: true, message: 'User created successfully' });

    } catch (err) {
        console.log('Error creating user', err);

        res.status(500).send({ success: false, message: 'Internal server error' });
    }
}

module.exports = { verifyOtp };