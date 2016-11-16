/***************Fecth data using mongodb where its is realted to model***********/
var express = require('express'),
     mongoose =require('mongoose'),
     http = require('http'),
     waterfall= require('async-waterfall'),
     async= require('async'),
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
      res.send();


   });

commanRouter.route('/booking')
    .post(function(req,res){
      var booking = new Booking(req.body);
      booking.save();
      res.send();


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
               console.log(searchId);
                        Categories.find({"meetUpId":searchId}, function (err, datas) {
                          if (err) 
                              res.status(500).send(err);

                          //console.log('%s %s is a %s.', datas)
                          res.json({"List":datas});
// Space Ghost is a talk show host.
})
        
        }
    })
  })



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