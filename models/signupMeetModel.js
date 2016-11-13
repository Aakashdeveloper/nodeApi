var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    
var signupMeetModel = new Schema({
	name:{type:String },
	emailid:{type:String, unique: true},
	password:{type:String}
    
	
});

module.exports = mongoose.model('SignUp', signupMeetModel, 'signupmeet');
	

