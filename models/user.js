var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    username: String,
    password: String,
    avatar: {
        type: String,
        default: '/images/default-avatar.jpeg'
    },
    title: {
        type: String,
        default: 'Untitled Blog'
    },
    description: {
        type: String,
        default: 'The author is lazy. Nothing is described...'
    },
    active: {
        type: Boolean,
        default: false
    },
    activeToken: String,
    activeExpires: Date,
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

UserSchema.plugin(passportLocalMongoose, {
    incorrectUsernameError: 'UserName error',
    incorrectPasswordError: 'UserName Not Exist',
    userExistsError: 'UserName Already exists. Please choose a different UserName.'
});


UserSchema.path('username').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
}, 'It is not a valid Email Address');

module.exports = mongoose.model('User', UserSchema);
