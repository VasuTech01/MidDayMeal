const mongoose = require("mongoose");
const {Schema} = mongoose;
const SchoolHealthSchema = new Schema({
    
    BMI:{
        type:String,
    },
    height:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true,
    },
    heartRate:{
        type:String,
        required:true,
    },

})

module.exports = mongoose.model('studentHealth', SchoolHealthSchema);