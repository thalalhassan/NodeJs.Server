const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryAppDB');

const Schema = mongoose.Schema;

var newBookData = new Schema({
    Title:String,
    Author:String,
    Genre:String

});

var bookData= mongoose.model('Book-Data',newBookData);
module.exports = bookData;
