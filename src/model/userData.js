const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryAppDB');

const Schema =mongoose.Schema;
var newUserData= new Schema({
    name:String,
    userType:String,
    email:String,
    phone:Number,
    password:String
});

var userData = mongoose.model('user-Data',newUserData);
exports=userData;