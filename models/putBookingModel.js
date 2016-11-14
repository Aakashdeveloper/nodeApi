var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    
var putBookingModel = new Schema({
	bookingId:{type:Number },
	meetingId:{type:Number},
	dateBooked:{type:String}
    
	
});

module.exports = mongoose.model('Booking', putBookingModel, 'booking');
	

