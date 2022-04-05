const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/MidDayMeal?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mogo Successfully");
    })
}

module.exports = connectToMongo;