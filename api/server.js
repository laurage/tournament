const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
engines = require('consolidate'),
assert = require('assert');

const app = express();
const PORT = process.env.PORT || 3000;

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  var db = client.db('tournament');
  // assert.equal(null, err);
  // console.log("error", err);

  console.log("Successfully connected to MongoDB. 10");

  app.use('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });

  // Answer API requests.
  app.get('/', function (req, res) {
    res.send('Hello World! 11')
  })

  app.get('/players2', function (req, res) {
    res.json({players: [{playerId: 1, playerName: "Loz"}, {playerId: 2, playerName: "Anne"}, {playerId: 3, playerName: "Mark"}]});
  });

  app.get('/players', function (req, res) {
    // console.log("req", req);
    // console.log("res", res);

    if (err) {
      console.log("error");
      console.error("is:", err);
    }

    db.collection('players').find({}).toArray(function(err, docs) {
        res.send({players: docs});
    });
  });

  app.use( function (req, res) {
    res.sendStatus(404);
  });

  app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
  });
});
