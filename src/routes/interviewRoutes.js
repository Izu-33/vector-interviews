const express = require('express');
const { 
    createInterviewSession,
    fetchInterviewById,
    fetchAllInterviews 
} = require('../controllers/interviewController');
const authMiddleware = require('../middleware/authMiddleware');
const recruiterMiddleware = require('../middleware/recruiterMiddleware');

const interviewRouter = express.Router();

interviewRouter.use(authMiddleware);

interviewRouter.post('/create-interview', 
    recruiterMiddleware,
    createInterviewSession
);

interviewRouter.get('/interview/:id', fetchInterviewById);

interviewRouter.get('/interview', fetchAllInterviews);

module.exports = interviewRouter;