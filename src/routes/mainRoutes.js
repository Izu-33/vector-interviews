const userRouter = require('./userRoutes');
const interviewRouter = require('./interviewRoutes');
const videoRouter = require('./videoRoutes');
const express = require('express');

const router = express.Router();

router.use('/users', userRouter);

router.use('/interviews', interviewRouter);

router.use('/videos', videoRouter);

module.exports = router;