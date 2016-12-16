const WebSocketServer = require('ws').Server;
const express = require('express');

const wss = new WebSocketServer({ port:8080 });

const app = express();
console.log(__dirname);
app.use(express.static(__dirname + '/../client'));

app.get('/spin', (req, res) => {
  wss.clients.forEach((client) => {
    client.send('SPIN!');
  })
  res.send('The wheel has been spun!');
});

app.listen(8082);