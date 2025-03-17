const isCandidate = (req, res, next) => {
    if (req.userInfo.role !== 'candidate') {
        return res.status(403).json({
            success: false,
            message: 'Access denied. Candidate rights required.'
        });
    }

    next();
};

module.exports = isCandidate;