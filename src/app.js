'use strict';

var express = require('express');
var router = require('./api');

var environment = 'prod';

var app = express();

    app.use('/', express.static('public'));
    app.use('/api', router);


if(environment == 'prod') {
    app.listen(process.env.PORT)
} else {
    app.listen('8000');
}

