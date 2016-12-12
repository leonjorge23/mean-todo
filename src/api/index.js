'use strict';

var express = require('express');
var todos = require('../../mocks/todos.json');

var router = express.Router();

router.get('/todos', function(req, res){
    res.json({todos : todos});
});

module.exports = router;