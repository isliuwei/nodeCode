var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs');

var schema = new mongoose.Schema({
    name: String,
    path: String
});

module.exports = mongoose.model('Photo',schema);