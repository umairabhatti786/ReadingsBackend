const mongoose = require("mongoose");
const SliderSchema=new mongoose.Schema({

    title:{
        type:String,
    },
    des:{
        type:String,
    },
    url:{
        type:String,
    },


})
const HomeSlider=mongoose.model("HomeSliders",SliderSchema,"HomeSliders")

module.exports={
    HomeSlider,

}

