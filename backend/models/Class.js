const mongoose = require("mongoose");
const {Schema} = mongoose;
const ClassSchema = new Schema({
    standard:{
        type:String,
        required:true,
    },
    section:{
        type:String,
        required:true
    },
    studentCount:{
        type:Number,
        required:true
    },
    classTeacher:{
        type:String, 
        required:true
    },

})

module.exports = mongoose.model('class', ClassSchema);