const Score = require('../models/score');
const ScoreController = {};

ScoreController.Submit = function(req, res) {
	Score.submitUser({
		name: req.body.name,
		email: req.body.email,
		preference: req.body.preference,
		score: req.body.score
	})
	.then(function(user){
		res.redirect('/quiz/finished')
	})
	.catch(function(error){
		console.error(error)
	})
}

module.exports = ScoreController;
