const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const candidateMiddleware = require('../middleware/candidateMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const { uploadVideo } = require('../controllers/videoController');

const videoRouter = express.Router();

videoRouter.use(authMiddleware);

videoRouter.post(
    '/upload',
    candidateMiddleware,
    uploadMiddleware.single('video'),
    uploadVideo
);

module.exports = videoRouter;