const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        Message: "Handling a GET request to /spends"
    });
});


router.post('/', (req, res, next) => {
    res.status(200).json({
        Message: "Handling a POST request to /spends"
    });
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