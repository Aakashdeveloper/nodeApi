var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    
var partyDetailsModel = new Schema({
	name:{
		type:String
	},
	value:{type:Number}
    
	
});

module.exports = mongoose.model('partyDetails', partyDetailsModel, 'partiesDetails');
	

