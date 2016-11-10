/***************Fecth data using mongodb where its is realted to model***********/
var express = require('express'),
     mongoose =require('mongoose');

var db = mongoose.connect('mongodb://localhost/acadglid');

var Bhanu        = require('./models/bhanuModel');

var app = express();

var port = process.env.PORT||8000; 
var commanRouter = express.Router();

commanRouter.route('/getName')
    .get(function(req,res){
		Bhanu.find(function(err,data){
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
