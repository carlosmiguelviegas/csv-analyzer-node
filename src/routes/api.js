const express = require('express');

const uploadRouter = require('./upload.route');
const authRouter = require('./auth.route');

const apiRouter = express.Router();

apiRouter.use('/upload', uploadRouter);
apiRouter.use('/auth', authRouter);

module.exports = apiRouter;
