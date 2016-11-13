/***************Fecth data using mongodb where its is realted to model***********/
var express = require('express'),
     mongoose =require('mongoose');

var db = mongoose.connect('mongodb://localhost/acadglid');

var Categories = require('./models/meetUpCategoriesModel');
var Booking = require('./models/putBookingModel');
var app = express();

var port = process.env.PORT||4400; 
var commanRouter = express.Router();

commanRouter.route('/getMeetUpCategories')
    .get(function(req,res){
		Categories.find(function(err,data){
			if(err)
			   res.status(500).send(err);
			else
				res.json({"List":data});
		})
});

commanRouter.route('/putBooking')
    .post(function(req,res){
    	var enterBooking = new Booking(req.body);
    	enterBooking.save();


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
