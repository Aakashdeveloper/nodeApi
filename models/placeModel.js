var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    
var placeModel = new Schema({
	placeName:{type:String},
	placeDisp:{type:String},
	imgUrl:{type:String},
    category:{type:String},
	value:{type:Number}

	
});

module.exports = mongoose.model('Place', placeModel, 'places')
	
