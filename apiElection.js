/***************Fecth data using mongodb where its is realted to model***********/
var express = require('express'),
     mongoose =require('mongoose');

var db = mongoose.connect('mongodb://localhost/acadglid');

var Party        = require('./models/partyModel');
var partyDetails = require('./models/partyDetailsModel');
var Place = require('./models/placeModel');
var app = express();

var port = process.env.PORT||3000; 
var commanRouter = express.Router();

commanRouter.route('/getParty')
    .get(function(req,res){
		Party.find(function(err,data){
			if(err)
			   res.status(500).send(err);
			else
				res.json(data);
		})
});

commanRouter.route('/getPartyDetails')
    .get(function(req,res){
		    var query = {};
			if(req.query.value){
				query.value = req.query.value
			}

		partyDetails.find(query, function(err,data){
			if(err)
			   res.status(500).send(err);
			else
				res.json({"List":data});
		})
});

app.use('/api', commanRouter);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
	res.send('welcome to api');
});

app.get('/image', function(req,res){
              res.end(img, 'binary');
});

app.listen(port, function(){
	console.log("running");
});
