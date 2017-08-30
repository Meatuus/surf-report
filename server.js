'use strict'

var express = require('express');
// var mongoose = require('mongoose');
const user = require('./user');
var Users = require('./model/users');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

// var Surf = require('./model/surf');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

//db config
// mongoose.connect('mongodb://tyler:Sandcastle@ds044699.mlab.com:44699/mernapp');

//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//
// //and remove cacheing so we get the most recent comments
//   res.setHeader('Cache-Control', 'no-cache');
//   next();
// });

app.use(cors());

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

app.get('/api/shellybeach', (req, res) => (
  request('http://magicseaweed.com/api/f03a395d88e9766e7ba7b625c73cc794/forecast/?spot_id=1036', (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      res.send(info);
    }
  })
))

app.get('/api/ballina', (req, res) => (
  request('http://magicseaweed.com/api/f03a395d88e9766e7ba7b625c73cc794/forecast/?spot_id=698', (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      res.send(info);
    }
  })
))

app.get('/api/byronbay', (req, res) => (
  request('http://magicseaweed.com/api/f03a395d88e9766e7ba7b625c73cc794/forecast/?spot_id=541', (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      res.send(info);
    }
  })
))

app.get('/api/users', (req, res) => {
  Users
    .fetchAll()
    .then(function(users) {
        res.json({ users });
      });
})

app.post('/api/users', (req, res) => {
  user
    .createUser({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => res.sendStatus(200))
})

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
