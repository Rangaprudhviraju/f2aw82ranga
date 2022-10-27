var express = require('express');

var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

var number1 = Math.random() *20;

var number2 = Math.random() *20;

var number3 = Math.random() *20;

var number4 = Math.random() *20;

var abs = Math.abs(number1);

var ac = Math.acos(number2);

var sin = Math.sin(number3);

var sng = Math.sinh(number4);

res.render('computate', { title: 'Prudhvi Ranga',

number1:number1,

number2:number2,

number3:number3,

number4:number4,

abs:abs,

ac:ac,

sin:sin,

sng:sng,

});

});



module.exports = router;


