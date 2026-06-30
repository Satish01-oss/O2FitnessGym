const express = require('express');
const router = express.Router();
const authModel = require('../models/auth.model');
const upload = require('../middlewares/uplod.middleware');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { uploadFile, deleteFile } = require('../services/storage.service');

router.post('/upload-avatar', authMiddleware, upload.single('avatar'), async (req, res) => {
    try {
        const user = await authModel.findById(req.user);

        if (!user) {
            return res.status(401).json({ message: 'User does not exist' })
        }

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' })
        }

        if (user.avatarId) {
            await deleteFile(user.avatarId);
        }
        
        const result = await uploadFile(req.file.buffer , user.userName);

        user.avatar = result.url;
        user.avatarId = result.fileId;
        await user.save();
        

        return res.status(200).json({ message: 'Avatar updated successfully', avatar: user.avatar })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Upload failed' })
    }
})

router.post('/delete-avatar', authMiddleware, async (req, res) => {
    try {
        const user =  await authModel.findById(req.user)

        if(user.avatarId) {
            await deleteFile(user.avatarId);
        }

        user.avatar = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
        user.avatarId = "";

        await user.save();

        return res.status(200).json({ message: 'Avatar deleted successfully' })
    }catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Deletion failed' })
    }
})

module.exports = router;