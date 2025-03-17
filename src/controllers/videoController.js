const Video = require('../models/video');
const { uploadToCloudinary } = require('../helpers/cloudinaryHelper');

const uploadVideo = async (req, res) => {
    try {
        // check if file is missing in req object
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'File is required. Please upload a video.'
            });
        };

        const { url, duration, publicId } = await uploadToCloudinary(req.file.path);

        // store video metadata in database
        const newlyUploadedVideo = new Video({
            url: url,
            duration: duration,
            publicId: publicId,
            uploadedBy: req.userInfo.id
        });

        await newlyUploadedVideo.save();

        return res.status(201).json({
            success: true,
            message: "Video uploaded successfully.",
            data: newlyUploadedVideo
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message
        });
    }
}

module.exports = {
    uploadVideo
};