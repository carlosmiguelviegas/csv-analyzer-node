const express = require('express');

const { analyze } = require('../controllers/upload.controller');
const multer = require('multer');

const upload = multer({ dest: 'files' });

const uploadRouter = express.Router();

uploadRouter.post('/analyze', upload.single('file'), analyze);

module.exports = uploadRouter;
