'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define movie schema
var UserSchema  = new _mongoose.Schema({
  // _id: {
  //   type: String,
  //   unique: true
  // },
  // token: String,
  // tokenExpired: Date,
  // email: String,
  // password: String
  name: String,
  email: String,
  password: String
});

// Export Mongoose model
exports.default = _mongoose2.default.model('User', UserSchema);