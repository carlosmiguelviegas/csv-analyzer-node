const express = require('express');
const cors = require('cors');
const fs = require('fs');
const parser = require('csv-parser');
const multer = require('multer');

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cors());

const upload = multer({ dest: 'files' });

app.post('/analyze', upload.single('file'), (req, res) => {

  const { path } = req['file'];
  const rows = [];
  
  fs.createReadStream(path)
  .pipe(parser())
  .on('data', chunck => rows.push(chunck));
});

app.listen(PORT, () => console.log(`server connected on port ${PORT} and listening to requests...`));
