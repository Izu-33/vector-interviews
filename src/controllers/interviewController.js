const Interview = require('../models/interview');

const createInterviewSession = async (req, res) => {
    try {
        const { title, description, questions } = req.body;
        const newInterviewSession = new Interview({
            title,
            description,
            questions
        });

        await newInterviewSession.save();

        return res.status(201).json({
            success: true,
            message: 'Interview session created successfully',
            data: newInterviewSession
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message
        });
    }
};

const fetchInterviewById = async (req, res) => {
    try {
        const interviewId = req.params.id;
        if (!interviewId) {
            return res.status(404).json({
                success: false,
                message: 'Provide interview ID'
            });
        };

        const interview = await Interview.findById(interviewId);
        if (!interview) {
            return res.status(404).json({
                success: false,
                message: 'Interview not found.'
            });
        };

        return res.status(200).json({
            success: true,
            message: 'Interview fetched successfully.',
            data: interview
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error.',
            error: err.message
        });
    }
};

const fetchAllInterviews = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 2;
        const skip = (page - 1) * limit;

        const sortBy = req.query.sortBy || 'createdAt';
        const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;
        const totalInterviews = await Interview.countDocuments();
        const totalPages = Math.ceil(totalInterviews / limit);

        const sortObj = {};
        sortObj[sortBy] = sortOrder;

        const interviews = await Interview.find().sort(sortObj).skip(skip).limit(limit);

        if (interviews) {
            return res.status(200).json({
                success: true,
                message: 'Interviews fetched successfully',
                currentPage: page,
                totalPages: totalPages,
                totalInterviews: totalInterviews,
                data: interviews
            });
        };
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error.',
            error: err.message
        });
    }
};

module.exports = {
    createInterviewSession,
    fetchInterviewById,
    fetchAllInterviews
};