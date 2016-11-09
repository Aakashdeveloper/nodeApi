var express = require('express'),
     mongoose =require('mongoose');

var db = mongoose.connect('mongodb://localhost/acadglid');

var Place = require('./models/placeModel');
var app = express();

var port = process.env.PORT||3000; 
var commanRouter = express.Router();

commanRouter.route('/getPlaces')
    .get(function(req,res){
		    var query = {};
			if(req.query.value){
				query.value = req.query.value
			}

		Place.find(query, function(err,data){
			if(err)
			   res.status(500).send(err);
			else
				res.json({"List":data});
		})
});
    

app.use('/api', commanRouter);

app.get('/', function(req,res){
	res.send('welcome to api');
});

app.listen(port, function(){
	console.log("running");
});