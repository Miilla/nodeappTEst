'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = undefined;

var _movie = require('../models/movie');

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import moment from 'moment';

// Hardcode the days for the sake of simplicity
var days = ['Today', 'Tomorrow' //, moment().add(2, 'days').format('ddd, MMM D') 
];
// Same for the times
var times = ['9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM'];

var index = exports.index = function index(req, res, next) {
  // Find all movies and return json response
  _movie2.default.find().lean().exec(function (err, movies) {
    return res.json(
    // Iterate through each movie
    { movies: movies.map(function (movie) {
        return {
          movie: movie,
          days: days, // and append days
          times: times // and times to each
        }; 
      }) });
  });
};