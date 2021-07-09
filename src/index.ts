import 'dotenv/config';

import http from 'http';

import server from './server';

const { PORT } = process.env;

http.createServer({
}, server)
  .listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
