const express = require('express');
const cors = require('cors');

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`server connected on port ${PORT} and listening to requests...`));
