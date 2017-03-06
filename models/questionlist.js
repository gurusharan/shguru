var mongoose = require('mongoose');
var config = require('../config/database');

//Questionlist Schema
var QuestionlistSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    }
});

var Question = module.exports = mongoose.model('Question', QuestionlistSchema);