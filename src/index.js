const http = require('http');

const PORT = 8000;

const app = require('./app');

const server = http.createServer(app);

server.listen(PORT, () => console.log(`server connected on port ${PORT} and listening to requests...`));
