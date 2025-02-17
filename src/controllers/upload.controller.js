const fs = require('fs');

const parser = require('csv-parser');

const analyze = async(req, res) => {
  
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
    if (err) res.status(500).json({ message: `An error occurred while processing the file.` });
  });

};

module.exports = {
  analyze
};
