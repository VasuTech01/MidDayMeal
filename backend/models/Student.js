const mongoose = require("mongoose");
const {Schema} = mongoose;
const StudentSchema = new Schema({
    adminNumber:{
        type:String,
        required:true;
    },
    firstName:{
        type:String,
        required:true,
    },
    secondName:{
        type:String,
        required:true
    },
    aadhaarNo:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    parentNo:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    religion:{
        type:String,
        required:true
    },
    standard:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true
    },

    
})

module.exports = mongoose.model('student', StudentSchema);