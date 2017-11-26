const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Answer API requests.
app.get('/', function (req, res) {
  res.send('Hello World! 4')
})

app.get('/players', function (req, res) {
  res.json({players: [{playerId: 1, playerName: "Laura"}, {playerId: 2, playerName: "Anne"}, {playerId: 3, playerName: "Mark"}]});
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
