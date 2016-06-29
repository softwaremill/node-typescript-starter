'use strict';
import * as http from 'http';

const PORT = 1221;

const server = http.createServer((req, res) => {
  res.end('hello!');
});

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
