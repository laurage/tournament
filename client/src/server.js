console.log("The server is starting");
const express = require('express');
const app = express();

app.listen(9090, function() {
  console.log('listening on 9090')
})
