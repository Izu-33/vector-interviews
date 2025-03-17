const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    uploadedBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;