const isRecruiter = (req, res, next) => {
    if (req.userInfo.role !== 'recruiter') {
        return res.status(403).json({
            success: false,
            message: 'Access denied. Recruiter rights required.'
        });
    }

    next();
};

module.exports = isRecruiter;