'use strict';
import * as http from 'http';
import PORT from './config';

const server = http.createServer((req, res) => {
  res.end('hello!');
});

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
