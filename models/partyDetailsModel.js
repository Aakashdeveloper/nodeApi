var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    
var partyDetailsModel = new Schema({
	name:{type:String},
	value:{type:Number},
	party:{type:String},
	percentage:{type:String}

    
	
});

module.exports = mongoose.model('partyDetails', partyDetailsModel, 'partiesDetails');
	

