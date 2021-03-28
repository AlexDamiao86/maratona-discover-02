const express = require("express");
const server = express();

server.get('/', (req, res) => {
  return res.status(200).json('OK')
});

server.get('/health', (req, res) => {
  return res.status(200).json('UP')
});

server.listen(3333, () => {
  console.log('Server has started.. Listening on port 3333')
});
