const authModel = require('../models/auth.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')
const rateLimit  = require('../middlewares/rateLimit.middleware')
const axios = require('axios')
const {
    OAuth2Client
} = require('google-auth-library')
const router = express.Router()

router.post('/login', rateLimit, async (req, res) => {
    const { userName, password , role = "user" } = req.body

    if (!userName || !password ) {
        return res.status(400).json({ message: 'Please provide username and password' })
    }
    
    try {

        const user = await authModel.findOne({ userName }).select('+password')
    
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' })
    }

    const token = jwt.sign({ id: user._id , role: user.role}, process.env.SECRET_KEY , { expiresIn: '7d' })


    res.cookie('token' , token , {
        httpOnly: true,
        secure : true,
        sameSite: 'none'
      })

    res.status(200).json({ 
        success: true,
        message: 'Login successful',
        user:{
            id: user._id,
            email: user.email,
            userName : userName,
            role: user.role
        }
    }
    )
    
    } catch (err) {
        console.log('Error while login' , err)

        res.status(500).json({
      message: "Internal server error"
   })
        
    }
})

router.post('/google', async function googleLogin(req, res) {

    try {

        const { access_token } = req.body;

        const googleResponse =
            await axios.get(
                `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`
            );

        const {
            email,
            name
        } = googleResponse.data;

        let user =
            await authModel.findOne({ email });

        if (!user) {

            user =
                await authModel.create({

                    userName:
                        `${name}`,

                    email,

                    password:
                        'google-auth-user-secure-password',

                    verified: true

                });
        }


        const token =
            jwt.sign(

                {
                    id: user._id,
                    role: user.role
                },

                process.env.SECRET_KEY,

                {
                    expiresIn: '7d'
                }

            );

            res.cookie('token' , token , {
                httpOnly: true,
                secure : true,
                sameSite: 'none',
              })

              
        res.status(200).json({

            message:
                'Google login successful',

            token,

            user

        });

    } catch (err) {

        console.log(err);

        res.status(500).json({

            message:
                'Google authentication failed'

        });
    }
})

module.exports = router