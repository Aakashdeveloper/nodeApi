/***************Fecth data using mongodb where its is realted to model***********/
var express = require('express'),
     mongoose =require('mongoose'),
     http = require('http'),
     waterfall= require('async-waterfall'),
     async= require('async'),
     request = require('request'),
     Futures = require('Futures'),
     bodyParser = require('body-parser');

var sequence = Futures.sequence();
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
/*
commanRouter.route('/userBooked')
    sequence.then(function(next){
          http.get(function(req,res){
            console.log("aaa");
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
         }
      })
},next)}).then(function(next){
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
 });
commanRouter.route('/userBooked')
        .get(function(req,res,callback){
              var query = {};
              if(req.query.userId){
                  query.userId = req.query.userId
              }
             var meetId ;
              Booking.find(query, function(err,data){
                if(err){
                   callback(err,null);
                   return;
                }
                  meetId = data
                   for (i= 0 ; i<meetId.length; i++){
                     var meetingId = (meetId[i].meetingId);
                     console.log(meetingId);
                     callback(meetingId)
                   }
              });
        }).pipe(http.get(function(req,res,meetingId, callback){
            var query = {};
                        
              query.meetingId = meetingId;
              Categories.find(query, function(err,datas){
                  if(err)
                    res.status(500).send(null);
                 else
                  callback(null, datas);
              })
                    
      }) ) 
commanRouter.route('/userBooked')
 async.waterfall([
  function(callback){
        http.get( function(req,res){
              var query = {};
              if(req.query.userId){
                  query.userId = req.query.userId
              }
             var meetId ;
              Booking.find(query, function(err,data){
                if(err){
                   callback(err,null);
                   return;
                }
                  meetId = data
                   for (i= 0 ; i<meetId.length; i++){
                     var meetingId = (meetId[i].meetingId);
                     console.log(meetingId);
                     callback(meetingId)
                   }
              });
        })
  },
  function(meetingId, callback){
       http.get(function(req,res){
            var query = {};
                        
              query.meetingId = meetingId;
              Categories.find(query, function(err,datas){
                  if(err)
                    res.status(500).send(null);
                 else
                  callback(null, datas);
              })
                    
      }) 
  }
], function (err, result) {
    if(err){
      console.log(err);
      return;
    }
      console.log(result)
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
*/


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