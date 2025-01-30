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
  .on('data', chunck => rows.push(chunck))
  .on('end', () => {
    fs.unlink(path, (err) => { if (err) console.log(err) });
    res.status(200).json({ message: `File processed with success. It were processed ${rows.length} records.` });
  })
  .on('error', (err) => {
    if (err) res.status(500).json({ message: `File processed with success. It were processed ${rows.length} records.` });
  });
});

app.listen(PORT, () => console.log(`server connected on port ${PORT} and listening to requests...`));
