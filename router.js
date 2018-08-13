'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _movies = require('./controllers/movies');
var AuthController = require('./controllers/AuthController');
var UserController = require('./controllers/UserController');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize the router
var router = (0, _express.Router)();

var bodyParser = require("body-parser");
router.use(bodyParser.json());
// Handle /movies.json route with index action from movies controller

// Import index action from movies controller
router.route('/movies').get(_movies.index);
router.route('/auth').post(AuthController.index);
// router.route('/users').get(UserController);

// router.route('/saveMovie')
//     .post('/save', (req,res) => {

//     });

exports.default = router;