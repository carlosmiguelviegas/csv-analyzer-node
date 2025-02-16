const express = require('express');

const uploadRouter = express.Router();

usersRouter.post('/signin',
  [
    emailValidator(),
    inputValidator('password')
  ],
  validateRequestInputs,
  login
);

module.exports = uploadRouter;
