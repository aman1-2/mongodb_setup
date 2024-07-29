const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    
    email: {
        type: String,
        required: true
    }
}, {timestamps: true});

userSchema.virtual('userNameWithEmail').get(function process() {
    return `${this.name}\nEmail: ${this.email}.`;
});

userSchema.pre('save', function(next) {
    console.log("Inside the hook/middleware.");
    this.name = 'New' + this.name;// Updated the data of the doument/record before its creation.
    next();
});

const User = mongoose.model('User', userSchema)

module.exports = User;