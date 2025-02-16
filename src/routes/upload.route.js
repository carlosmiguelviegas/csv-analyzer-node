const express = require('express');

const upload = multer({ dest: 'files' });

const uploadRouter = express.Router();

usersRouter.post('/analyze', upload.single('file'));

module.exports = uploadRouter;
