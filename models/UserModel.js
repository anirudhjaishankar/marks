var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String,
    access: {
        type:'String',
        enum:['student', 'staff', 'admin']
    }
});

var User = mongoose.model('User', userSchema);

module.exports = User;