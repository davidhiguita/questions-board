const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    id: Number,
    isCorrect: Boolean,
    question: String
});

const QuestionModel = mongoose.model('questions', QuestionSchema);

const connectDB = () => 
    mongoose.connect('mongodb://localhost:27017/questions-board', { useNewUrlParser: true });

module.exports = {
    connectDB,
    QuestionModel
};