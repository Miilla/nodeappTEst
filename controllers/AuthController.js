var express = require('express');
var bcrypt = require('bcryptjs');
var User = require('../models/user');
var config = require('../config');
var jwt = require('jsonwebtoken');
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var index = exports.index =  function index(req, res) {
  console.log(req.body);
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  var myData = new User.default(req.body);
  myData.save(function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user.")
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });   
};