const express = require("express");
const server = express();
const routes = require('./routes');

server.set('view engine', 'ejs');
  
// Habilitar arquivos estáticos
server.use(express.static("public"));

server.use(routes);

server.get('/health', (req, res) => {
  return res.status(200).json('UP')
});

server.listen(3333, () => {
  console.log('Server has started.. Listening on port 3333')
});
