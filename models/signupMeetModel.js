var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    
var signupMeetModel = new Schema({
	name:{
		type:String
	},
	emailid:{type:String},
	password:{type:String}
    
	
});

module.exports = mongoose.model('SignUp', signupMeetModel, 'signupmeet');
	

