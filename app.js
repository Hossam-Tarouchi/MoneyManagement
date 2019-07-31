const express = require('express');

//importing spends routes
const spendsRoutes = require('./api/routes/spends');

//Morgan will help us to log some informations in the console about ht eincoming request
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));


app.use('/spends', spendsRoutes);

module.exports = app;