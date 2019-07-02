'use strict';
var express = require('express');
var router = express.Router();

var getData = function () {
    var data = {
        'item1': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-76.jpg',
        'item2': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-77.jpg',
        'item3': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-78.jpg'
    }
    return data;
}

var getRandomNumber = function () {
    var min = 1
    var max = 10
    var num = (Math.random() * (+max - +min)) + +min; 

    document.getElementById("output1").value = num.toFixed(2);
}

var print = function () {
    document.getElementById("output1").value = "Hello, world!");
}

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'JavavScript Test', "data": getData()});
});

module.exports = router;
