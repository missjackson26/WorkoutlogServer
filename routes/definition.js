var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js');
var definition = sequelize.import('../models/definition.js');

router.post('/', function(req, res) {
    //variables
var description = req.body.definition.desc;
var logType = req.body.definition.type;
var owner = req.user.id;

//methods
definition  
.create({
    description: description,
    logType: logType,
    owner: owner
})
 .then(
    //createSuccess function
    
    
    //createError function
    function createSuccess(definition) {
            //send a response as json
            res.json({
                definition: definition
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
    });

        router.get('/', function(req, res){
            //user variable
            var userid= req.user.id;
            definition
            //findAll by owner method
            .findAll({
                where: { owner: userid }
            })

            .then(
                //success
                function findAllSuccess(data) {
                    //console.log(data);
                    res.json(data);
                },
                //failure
                function findAllError(err) {
                    res.send(500, err.message);
                }
            );
        });

        module.exports = router;