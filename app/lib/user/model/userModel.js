var mongoose = require('mongoose');

var User = new mongoose.Schema({
    name : String
});

module.exports = mongoose.model('user', User);
