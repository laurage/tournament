const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Answer API requests.
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/api/hello', function (req, res) {
  res.json({message: "Hello World"});
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
