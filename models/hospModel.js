var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    
var hospModel = new Schema({
	name:{
		type:String
	},
	address:{type:String}
    
	
});

module.exports = mongoose.model('Hospital', hospModel, 'hospitals');
	
