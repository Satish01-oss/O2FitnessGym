const {verifyOtp} = require('../controllers/verify.controller')
const express = require('express')
const router = express.Router()

router.post('/verify-otp', verifyOtp)

module.exports = router