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

module.exports = createInterviewSession;