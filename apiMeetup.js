/***************Fecth data using mongodb where its is realted to model***********/
var express = require('express'),
     mongoose =require('mongoose'),
     http = require('http');
     bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/acadglid');

var SignUp   = require('./models/signupMeetModel');
var Booking = require('./models/bookingModel');
var Categories = require('./models/meetUpCategoriesModel');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var port = process.env.PORT||7500; 
var commanRouter = express.Router();

commanRouter.route('/signups')
    .post(function(req,res){
    	var signup = new SignUp(req.body);
    	signup.save();


   });

commanRouter.route('/booking')
    .post(function(req,res){
      var booking = new Booking(req.body);
      booking.save();


   });

commanRouter.route('/getMeetUpCategories')
    .get(function(req,res){
    Categories.find(function(err,data){
      if(err)
         res.status(500).send(err);
      else
        res.json({"List":data});
    })
});

commanRouter.route('/userBooked')
    .get(function(req,res){
      var query = {};
      if(req.query.userId){
        query.userId = req.query.userId
      }
     var meetId ;
     Booking.find(query, function(err,data){
      if(err)
         res.status(500).send(err);
      else
         meetId = data
         for (i= 0 ; i<meetId.length; i++){
             var searchId = (meetId[i].meetingId);
               http.get(function(req,res){
                    var query = {};
                      
                        query.meetingId = searchId;
                        Categories.find(query, function(err,datas){
                            if(err)
                               res.status(500).send(err);
                            else
                              console.log( datas);
                        })
                  
              })
        }

        
    })
});



commanRouter.route('/signin')
    .get(function(req,res,next){
    var query ={};
      if(req.query.emailid){
        query.emailid = req.query.emailid
      }
    SignUp.find(query, function(err,data){
      if(err)
         res.status(500).send()
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
