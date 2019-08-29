const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryAppDB');

const Schema = mongoose.Schema;

var newAuthorData = new Schema({
    Name:String,
    Country:String,

});

var authorData= mongoose.model('author-Data',newAuthorData);
module.exports = authorData;
