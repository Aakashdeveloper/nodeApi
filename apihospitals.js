/***************Fecth data using mongodb where its is realted to model***********/
var express = require('express'),
     mongoose =require('mongoose');

var db = mongoose.connect('mongodb://localhost/acadglid');

var Hospital = require('./models/hospModel');
var app = express();
//db.categories.find().limit( 2 ).skip( _rand() * db.categories.count() )
var port = process.env.PORT||3000; 
var commanRouter = express.Router();
var allval = [];
//var query = Book.find().limit( 2 ).skip( _rand() * db.categories.count() )
commanRouter.route('/getHospital')
    .get(function(req,res){
		
		
		Hospital.count().exec(function(err, count){

		var random = Math.floor(Math.random() * count);

		  Hospital.find().skip(random).limit(3).exec(
			function (err, result) {

			  if(err)
			   res.status(500).send(err);
			else
		
				res.json(result);

		  });

		});
});
    


app.use('/api', commanRouter);

app.get('/', function(req,res){
	res.send('welcome to api');
});

app.listen(port, function(){
	console.log("running");
});