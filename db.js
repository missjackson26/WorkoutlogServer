var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL ||
'postgres://postgres:skip983825@localhost:5433/workoutlog', {
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