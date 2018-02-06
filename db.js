var Sequelize = require('sequelize');
var sequelize = new Sequelize('workoutlog', 'postgres', 'skip983825', {
	host: 'localhost',
	dialect: 'postgres',
	port: 5433
});



sequelize.authenticate().then(
	function() {
		console.log('connected to workoutlog postgres db');
	},
	function(err){
		console.log(err);
	}
);

var User = sequelize.import('./models/user');

module.exports = sequelize;