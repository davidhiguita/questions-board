const express = require('express');
const router = express.Router();
const { connectDB, QuestionModel } = require('./question.model');

connectDB();

router.get('/', (req, res) => {
    QuestionModel.find({}, (error, data) => {
        if (error) {
            return res.status(500).json({ data, error })
        }
        return res.status(200).json({ data, error: null })
    });    
});

router.get('/:id', (req, res) => {
    QuestionModel.findOne({ id: req.params.id }, (error, data) => {
        if (error) {
            return res.status(500).json({ data, error })
        }
        return res.status(200).json({ data, error: null })
    });    
});

router.put('/', (req, res) => {
    const { id, isCorrect } = req.body;
    QuestionModel.updateOne({ id }, { isCorrect }, (error, data) => {
        if (error) {
            return res.status(500).json({ data, error })
        }
        return res.status(200).json({ data, error: null })
    });    
});

router.put('/reset', (req, res) => {
    QuestionModel.updateMany({}, { isCorrect: null }, (error, data) => {
        if (error) {
            return res.status(500).json({ data, error })
        }
        return res.status(200).json({ data, error: null })
    });    
});

module.exports = router;