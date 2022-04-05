const mongoose = require("mongoose");
const {Schema} = mongoose;
const SchoolSchema = new Schema({
    
    affiliateNo:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    tehsil:{
        type:String,
        // required:true
    },
    state:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    board:{
        type:String,
        required:true
    },
    

})

module.exports = mongoose.model('school', SchoolSchema);