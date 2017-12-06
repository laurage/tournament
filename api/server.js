const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

// Answer API requests.
app.get('/', function (req, res) {
  res.send('Hello World! 7')
})

app.get('/players', function (req, res) {
  res.json({players: [{playerId: 1, playerName: "Laura"}, {playerId: 2, playerName: "Anne"}, {playerId: 3, playerName: "Mark"}]});
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
