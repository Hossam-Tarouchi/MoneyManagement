const express = require('express');

//importing spends routes
const spendsRoutes = require('./api/routes/spends');

//Morgan will help us to log some informations in the console about ht eincoming request
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));


app.use('/spends', spendsRoutes);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;