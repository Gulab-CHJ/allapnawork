const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({

doctorId:{
type:String,
required:true
},

doctorName:String,

products:[{

productId:String,
name:String,
price:Number,
qty:Number

}],


total:Number,


status:{
type:String,
default:"Pending"
},


createdAt:{
type:Date,
default:Date.now
}


});


module.exports = mongoose.model("Order",orderSchema);
