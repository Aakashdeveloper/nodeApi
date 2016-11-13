var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
    
var MeetUpCategoriesModel = new Schema({
	name:{type:String},
	imgUrl:{type:String},
    slotbooked:{type:Number},
	slotremaining:{type:Number}
    
	
});

module.exports = mongoose.model('Categories', MeetUpCategoriesModel, 'meetupcategories');
	

