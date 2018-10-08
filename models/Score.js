const db = require('../db/config');
const Score = {};

Score.submitUser = function(user) {
	return db.one('INSERT INTO scores (name, email, preference, score) VALUES ($1, $2, $3, $4) RETURNING *', [user.name, user.email, user.preference, user.score]);
}


Score.findByUser = function(userId) {
	return db.oneOrNone('SELECT score FROM scores WHERE userId = $1',[userId]);
}

module.exports = Score;