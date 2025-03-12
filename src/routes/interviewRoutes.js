const express = require('express');
const createInterviewSession = require('../controllers/interviewController');
const authMiddleware = require('../middleware/authMiddleware');
const recruiterMiddleware = require('../middleware/recruiterMiddleware');

const interviewRouter = express.Router();

interviewRouter.post('/create-interview', authMiddleware, recruiterMiddleware, createInterviewSession);

module.exports = interviewRouter;