const mongoose = require("mongoose");
const {Schema} = mongoose;
const AttendanceSchema = new Schema({

    adminNumber:{
        type:String,
        required:true,
    },
    mealDate:{
        type:Date,
        default:Date.now,
    },
    status:{
        type:String,
        required:true,
    },

})

module.exports = mongoose.model('attendance', AttendanceSchema);