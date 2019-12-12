const express = require('express');
const mongoose = require('mongoose');
const Spends = require('../modeles/spends');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        Message: "Handling a GET request to /spends"
    });
});


router.post('/', (req, res, next) => {
    const Spend = new Spends({
        id: new mongoose.Types.ObjectId(),
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        at: new Date()
    });

//TODO: now we just return the Object. After this, we should store it in a database :D     
    res.status(200).json({Spend});
});


router.get('/:spendId', (req, res, next) => {
    res.status(200).json({
        Message: "Handling a GET request to /spends/:spendId"
    });
});


router.delete('/:spendId', (req, res, next) => {
    res.status(200).json({
        Message: "Handling a DELETE request to /spends/:spendId"
    });
});

router.patch('/:spendId', (req, res, next) => {
    res.status(200).json({
        Message: "Handling a PATCH request to /spends/:spendId"
    });
});


module.exports = router;