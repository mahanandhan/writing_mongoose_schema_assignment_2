const mongoose = require('mongoose');

const connectDB = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    Content: {
        type: String,
        required: true,
        unique: true,
        minlength: 50
    },
    Author: {
        type: String,
        required: true,
        unique: true,
    },
    Tags: {
        type: String,
        enum: ['tech', 'coding'],
        default: 'tech'
    },
    Category: {
        type: String,
        default: "General"
    },
    Likes: {
        type: String,
        enum: ['String']
    },
    CreatedAt: {
        type: Date,
        default: Date.now()
    },
    UpdatedAt: {
        type: Date,
        default: Date.now()
    },
    Comments: {
        Username:{
            type: String,
            required: true
        },
        Message: {
            type: String,
            required: true
        },
        CommentedAt: {
            type: String,
            required: true
        }
    }

}, {timestamps: true});

const User = mongoose.model('User', connectDB);

export default User;