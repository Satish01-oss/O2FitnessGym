const authModel = require('../models/auth.model');
const nodemailer = require('nodemailer');

const pendingUser = {};

async function register(req, res) {
    const { email, userName, password , role = "user" } = req.body;


    const validEmail = await authModel.findOne({ email });

    if (validEmail) {
        return res.status(400).send({ message: 'Email already exist' });
    }

    const userExist = await authModel.findOne({ userName });

    if (userExist) {
        return res.status(400).send({ message: 'User already exist' });
    }

    try {
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const otpExp = Date.now() + 5 * 60 * 1000;

        pendingUser[email] = {
            email,
            userName,
            password,
            role,
            otp,
            otpExp
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        })

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: 'Verify your email',
            text: `Your otp is ${otp}`
        })


        res.status(201).send({
            message: "OTP send successfully"
        })


    } catch (err) {
        console.log('Error creating user', err);

        res.status(500).send({ message: 'Internal server error' });
    }
}


module.exports = { register , pendingUser};