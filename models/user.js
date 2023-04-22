const mongoose = require('mongoose')
const validator = require('validator')
const {Schema} = mongoose
const crypto = require('crypto')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Email is not valid!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: 8,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Confirm your password!'],
        validate: {
            validator: function (el) {
                return el === this.password
            },
            message: 'Passwords are not the same!'
        },
        select: false
    },
    passwordChangedAt: String,
    googleId: String,
    displayName: String
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
})

userSchema.methods.correctPassword = async function(actualPassword, probablePassword) {
    return await bcrypt.compare(actualPassword, probablePassword)
}

const User = mongoose.model('Users', userSchema)

module.exports = User