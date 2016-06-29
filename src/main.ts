'use strict';
import * as http from 'http';

//Loading dotenv - it should be done as early as possible
require("dotenv").config();

const PORT = process.env.PORT;


const server = http.createServer((req, res) => {
  res.end('hello!');
});

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
