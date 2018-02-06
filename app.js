require('dotenv').config();

var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var sequelize = require('./db.js');

var User = sequelize.import('./models/user');

sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-sessions'));
app.use('/api/user', require('./routes/user'));
//login route
app.use('/api/login', require('./routes/session'));
app.use('/api/definition', require('./routes/definition'));
app.use('/api/log', require('./routes/log'));





app.use('/api/test', function(req, res){
	res.send("Hello World");
});

http.listen(process.env.PORT || 3000, function(){
	console.log('App is listening on 3000...')
});

//Data Model



//  User.sync({force:true})






