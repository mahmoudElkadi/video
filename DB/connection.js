const mongoose=require("mongoose")


const initConnection=()=>{
    return mongoose.connect("mongodb://localhost:27017/videos").then(console.log("connected"))
}

module.exports=initConnection