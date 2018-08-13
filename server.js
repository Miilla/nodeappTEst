'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _movie = require('./models/movie');

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import com.microsoft.windowsazure.mobileservices.*;

// Connect to MongoDB
_mongoose2.default.connect('mongodb://mila:mila11111@111.mlab.com:46067/milanodeapp');

var db = _mongoose2.default.connection;

// Initialize http server
var app = (0, _express2.default)();

// Logger that outputs all requests into the console
//app.use(morgan('combined'));
// Use v1 as prefix for all API endpoints
app.use('/v1', _router2.default);

var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/addname", function (req, res) {
  var myData = new _movie2.default(req.body);
  myData.save(function (err) {
    if (err) res.status(400).send("unable to save to database");else res.send("item saved to database");
  });
  // .then(item => {
  //   res.send("item saved to database");
  // })
  // .catch(err => {
  //   res.status(400).send("unable to save to database");
  // });
});



// var server = app.listen(3000, function(){
//   console.log('Express server listening on port ' + 3000);
// });
  var server = app.listen(process.env.PORT || 5000);