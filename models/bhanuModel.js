var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    
var bhanuModel = new Schema({
	name:{
		type:String
	},
	value:{type:Number}
    
	
});

module.exports = mongoose.model('Bhanu', bhanuModel, 'bhanu');
	

