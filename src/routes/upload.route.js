const express = require('express');

const { analyze } = require('../controllers/upload.controller');

const upload = multer({ dest: 'files' });

const uploadRouter = express.Router();

usersRouter.post('/analyze', upload.single('file'), analyze);

module.exports = uploadRouter;
