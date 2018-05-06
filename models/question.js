const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question: String,
    points: {type: Number, default: 100},
    answer: String
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;