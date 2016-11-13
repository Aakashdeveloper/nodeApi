var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    
var putBookingModel = new Schema({
	name:{type:String },
	emailid:{type:String, unique: true},
	password:{type:String}
    
	
});

module.exports = mongoose.model('Booking', putBookingModel, 'booking');
	

