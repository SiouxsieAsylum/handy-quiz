const express = require("express");
const scoreController = require('../controllers/scoreController');
const router = express.Router();

router.get('/', function(req, res){
	res.render('quiz')
})

router.post('/', scoreController.Submit)//how to pass user in here

router.get('/finished', function(req, res){
	res.render('thanks');
})

module.exports = router;