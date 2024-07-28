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

const User = mongoose.model('User', userSchema)

module.exports = User;