'use strict'

var express = require('express');
const user = require('./user');
var Users = require('./model/users');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var axios = require('axios');

var nodemailer = require('nodemailer');
var {email, password} = require('./email');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

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

const locationOneUrl = 'http://magicseaweed.com/api/f03a395d88e9766e7ba7b625c73cc794/forecast/?spot_id=698';
const locationTwoUrl = 'http://magicseaweed.com/api/f03a395d88e9766e7ba7b625c73cc794/forecast/?spot_id=541';
const locationThreeUrl = 'http://magicseaweed.com/api/f03a395d88e9766e7ba7b625c73cc794/forecast/?spot_id=1036';
const locationOne = "Ballina";
const locationTwo = "Byron Bay";
const locationThree = "Shelly Beach";

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

app.get('/api/shellybeach', (req, res) => (
  request(locationThreeUrl, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      res.send(info);
    }
  })
))

app.get('/api/ballina', (req, res) => (
  request(locationOneUrl, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      res.send(info);
    }
  })
))

app.get('/api/byronbay', (req, res) => (
  request(locationTwoUrl, (error, response, body) => {
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

app.post('/api/users', (req, res) => {
  user
    .createUser({
      username: req.body.username,
      password: req.body.password,
      alert: req.body.alert,
      wind: req.body.wind,
      location: req.body.location,
      SwellMin: req.body.swellMin,
      SwellMax: req.body.swellMax
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

// on intervals of 1 hour compares current conditions data with user data to send emails
setInterval(function() {
  Users
    .fetchAll()
    .then(function(users) {
      let usersArray = users.models;
      alerting(usersArray);
    })
}, 3600000);

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});

const emailFrom = email;

function alerting(usersArray) {
  const currentTime = (Date.now()/1000);
  let allCurrentConditions = [];

  Promise.all([
    axios.get(locationOneUrl),
    axios.get(locationTwoUrl),
    axios.get(locationThreeUrl)
  ]).then((res) => {
    // grab conditions for 3 locations and move all to array that are current
    for (var i = 0; i < res.length; i++) {
      allCurrentConditions.push(res[i].data.filter((item) => {
        return item.timestamp > currentTime;
      }))
    }
    // go through usersarray parameter find ones with alerts enabled and compare their settings with current conditions
    for (var i = 0; i < usersArray.length; i++) {
      let alert = usersArray[i].attributes.alert;
      let location = usersArray[i].attributes.location;
      let minSwell = usersArray[i].attributes.SwellMin;
      let maxSwell = usersArray[i].attributes.SwellMax;
      let user = usersArray[i].attributes.username

      let mailOptions = {
        from: emailFrom,
        to: user,
        subject: "Surf's up",
        text: `it's ideal conditions at ${location}!!`
      };

      if (alert === 1 && location === locationOne && allCurrentConditions[0][0].swell.minBreakingHeight === minSwell && allCurrentConditions[0][0].swell.maxBreakingHeight === maxSwell) {
        console.log(`location and swells match ${location}!!`);
        sendEmail(mailOptions);
      } else if (alert === 1 && location === locationTwo && allCurrentConditions[1][0].swell.minBreakingHeight === minSwell && allCurrentConditions[1][0].swell.maxBreakingHeight === maxSwell) {
        console.log(`location and swells match ${location}!!`);
        sendEmail(mailOptions);
      } else if (alert === 1 && location === locationThree && allCurrentConditions[2][0].swell.minBreakingHeight === minSwell && allCurrentConditions[2][0].swell.maxBreakingHeight === maxSwell) {
        console.log(`location and swells match ${location}!!`);
        sendEmail(mailOptions);
      }
    }
  });
}

function sendEmail(mailOptions) {
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

function signupEmail(emailTo) {
  let mailOptions = {
    from: emailFrom,
    to: emailTo,
    subject: 'Welcome to my little surf alert app',
    text: 'Hope you surf at one of our 3 locations!'
  };
  sendEmail(mailOptions);
}

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
