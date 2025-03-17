const multer = require('multer');
const path = require('path');

// set multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        )
    }
});

// file filter function
const checkFileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('video')) {
        cb(null, true)
    } else {
        cb(new Error('Not a video! Please upload a video.'))
    }
};

// multer middleware
module.exports = multer({ 
    storage: storage, 
    fileFilter: checkFileFilter,
    limits: {
        fileSize: 150 * 1024 * 1024
    }
});