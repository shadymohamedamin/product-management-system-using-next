var mongoose=require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var productS=mongoose.Schema(
    {
        //idd:{type:Number,required:true},
        title:   {type:String,required:true},
        price:   {type:String,required:true},
        taxes:   {type:String,required:true},
        ads:     {type:String,required:true},
        discount:{type:String,required:true},
        total:   {type:String,required:true},
        count:   {type:String,required:true},
        category:{type:String,required:true},
    }
);
//autoIncrement.initialize(mongoose.connection); // 3. initialize autoIncrement 
//userS.plugin(autoIncrement.plugin, { model: 'User', field: '_id', startAt: 1 });
module.exports=mongoose.model('Product',productS);