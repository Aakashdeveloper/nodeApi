var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    
var partyModel = new Schema({
	name:{type:String},
	value:{type:Number}
    
	
});

module.exports = mongoose.model('Party', partyModel, 'parties');
	

