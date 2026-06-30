const ImageKit =  require("imagekit");

const imageKit = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    urlEndpoint : process.env.IMAGEKIT_ENDPOINT
})

async function uploadFile(buffer , userName) {
    const result = await imageKit.upload({
        file: buffer.toString('base64'),
        fileName: userName + '_' + Date.now() + '.jpg'
    })
    return result;
}

async function deleteFile(fileId) {    
    return await imageKit.deleteFile(fileId);
}

module.exports = { uploadFile, deleteFile };