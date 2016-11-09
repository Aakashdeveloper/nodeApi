var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    
var catModel = new Schema({
	name:{
		type:String
	},
	value:{type:Number}
    
	
});

module.exports = mongoose.model('Cat', catModel, 'categories');
	

