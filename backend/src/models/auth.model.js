const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    otp : String,
    otpExp : Date,
    verified : {
        type: Boolean,
        default: false
    },
    avatar : {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    avatarId : {
        type: String,
        default: ""
    },
    role : {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: "user"
    },
})

const authModel = mongoose.model('auth' , authSchema);

module.exports = authModel;