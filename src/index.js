const http = require('http');

require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT;

http.createServer({
}, server)
    .listen(PORT, function() {
      console.log('Server is listening on port ' + PORT);
    });
