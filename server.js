'use strict'

var express = require('express');
// var mongoose = require('mongoose');
const user = require('./user');
var Users = require('./model/users');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

var nodemailer = require('nodemailer');
var {email, password} = require('./email');

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
const ballinaUrl = 'http://magicseaweed.com/api/f03a395d88e9766e7ba7b625c73cc794/forecast/?spot_id=698';
const byronbayUrl = 'http://magicseaweed.com/api/f03a395d88e9766e7ba7b625c73cc794/forecast/?spot_id=541';
const shellybeachUrl = 'http://magicseaweed.com/api/f03a395d88e9766e7ba7b625c73cc794/forecast/?spot_id=1036';

app.use(cors());

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

app.get('/api/shellybeach', (req, res) => (
  request(shellybeachUrl, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      res.send(info);
    }
  })
))

app.get('/api/ballina', (req, res) => (
  request(ballinaUrl, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      res.send(info);
    }
  })
))

app.get('/api/byronbay', (req, res) => (
  request(byronbayUrl, (error, response, body) => {
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

      // pass array of all users to alert function => this will be moved to separate function
      let array = users.models;
      alerting(array);
    })
})

app.get('/api/users/:username', (req, res) => {
  Users
    .where('username', req.params.username)
    .fetch()
    .then(function(user) {
      res.json(user)
    })
})

// TODO: have alerting function fire on interval of 3 hours instead of get request to users

function alerting(array) {
  const currentTime = (Date.now()/1000);
  let currentConditionsBallina = [];
  let currentConditionsByron = [];
  let currentConditionsShelly = [];

    for (var i = 0; i < array.length; i++) {
      let alert = array[i].attributes.alert;
      let location = array[i].attributes.location;
      let minSwell = array[i].attributes.SwellMin;
      let maxSwell = array[i].attributes.SwellMax;
      let user = array[i].attributes.username

      let mailOptions = {
        from: emailFrom,
        to: user,
        subject: "Surf's up",
        text: `it's ideal conditions at ${location}!!`
      };

      function sendEmail() {

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      }

      if (alert === 1 && location === "Ballina") {
        request(ballinaUrl, (error, response, body) => {
          if (!error && response.statusCode == 200) {
            var info = JSON.parse(body)

            for (var i = 0; i < info.length; i++) {
              if (info[i].timestamp > currentTime) {
                currentConditionsBallina.push(info[i])
              }
            }
            if (currentConditionsBallina[0].swell.minBreakingHeight === minSwell && currentConditionsBallina[0].swell.maxBreakingHeight === maxSwell) {
              console.log('swells match');
              sendEmail();
            }
          }
        })
      } else if (alert === 1 && location === "Byron Bay") {
        request(byronbayUrl, (error, response, body) => {
          if (!error && response.statusCode == 200) {
            var info = JSON.parse(body)

            for (var i = 0; i < info.length; i++) {
              if (info[i].timestamp > currentTime) {
                currentConditionsByron.push(info[i])
              }
            }
            if (currentConditionsByron[0].swell.minBreakingHeight === minSwell && currentConditionsByron[0].swell.maxBreakingHeight === maxSwell) {
              console.log('swells match');
              sendEmail();
            }
          }
        })
      } else if (alert === 1 && location === "Shelly Beach") {
        request(shellybeachUrl, (error, response, body) => {
          if (!error && response.statusCode == 200) {
            var info = JSON.parse(body)

            for (var i = 0; i < info.length; i++) {
              if (info[i].timestamp > currentTime) {
                currentConditionsShelly.push(info[i])
              }
            }
            if (currentConditionsShelly[0].swell.minBreakingHeight === minSwell && currentConditionsShelly[0].swell.maxBreakingHeight === maxSwell) {
              console.log('swells match');
              sendEmail();
            }
          }
        })
      }
    }

}

function signupEmail(emailTo) {

  let mailOptions = {
    from: emailFrom,
    to: emailTo,
    subject: 'Welcome to my little surf alert app',
    text: 'Hope you surf at one of our 3 locations!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});

const emailFrom = email;

app.post('/api/users', (req, res) => {
  user
    .createUser({
      username: req.body.username,
      password: req.body.password,
      alert: req.body.alert
    })
    .then(() => {
      res.sendStatus(200)
      console.log(req.body.username);
      signupEmail(req.body.username);
    })
})

app.put('/api/users/:username', (req, res) => {
  Users
    .where('username', req.params.username)
    .fetch()
    .then(function(user) {
      user
        .save({
          username: req.body.username,
          password: req.body.password,
          alert: req.body.alert,
          SwellMin: req.body.SwellMin,
          SwellMax: req.body.SwellMax,
          wind: req.body.wind,
          location: req.body.location,
        })
        .then(function(saved) {
          res.json({ saved });
        });
    });
})

app.delete('/api/users/:id', (req, res) => {
  Users
    .where('id', req.params.id)
    .destroy()
    .then(function(destroyed) {
      res.json({ destroyed });
    });
})

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
