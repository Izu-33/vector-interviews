const cloudinary = require('../config/cloudinary');

const uploadToCloudinary = async (filePath) => {
    try {
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_large(filePath, {
                resource_type: "video",
                chunk_size: 6000000,
                transformation: [
                    { quality: "auto" },
                    { fetch_format: "auto" }
                ],
                format: "mp4",
                video_codec: "auto",
                folder: "candidate_videos",
                max_file_size: 150000000 
              }, (error, result) => {
                if (error) {
                    console.error("Cloudinary Upload Error:", error);
                    return reject(new Error("Error while uploading to Cloudinary"));
                }
                resolve(result);
            });
        });

        return {
            url: result.secure_url,
            duration: result.duration,
            publicId: result.public_id
        };
    } catch (err) {
        console.error('Error while uploading to Cloudinary: \n', err);
        throw new Error('Error while uploading to Cloudinary')
    }
};

module.exports = {
    uploadToCloudinary
};