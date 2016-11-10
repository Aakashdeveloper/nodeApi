/***************Fecth data using mongodb where its is realted to model***********/
var express = require('express'),
     mongoose =require('mongoose'),
     bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/acadglid');

var SignUp   = require('./models/signupMeetModel');
var partyDetails = require('./models/partyDetailsModel');
var Place = require('./models/placeModel');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var port = process.env.PORT||7000; 
var commanRouter = express.Router();

commanRouter.route('/signups')
    .post(function(req,res){
    	var signup = new SignUp(req.body);
    	signup.save();
    	res.status(201).send(signup);

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
