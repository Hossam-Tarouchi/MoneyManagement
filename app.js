const express = require('express');

//Morgan will help us to log some informations in the console about ht eincoming request
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));


app.use((req, res, next)=>{
    res.status(200).json({
        Message: "Hello World!"
    });
});

module.exports = app;