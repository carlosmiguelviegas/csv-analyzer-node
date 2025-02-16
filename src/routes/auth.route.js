const express = require('express');

const { signin } = require('../controllers/auth.controller');

const authRouter = express.Router();

usersRouter.post('/signin', signin);

module.exports = authRouter;
