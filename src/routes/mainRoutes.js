const userRouter = require('./userRoutes');
const interviewRouter = require('./interviewRoutes');
const express = require('express');

const router = express.Router();

router.use('/users', userRouter);

router.use('/interviews', interviewRouter);

module.exports = router;