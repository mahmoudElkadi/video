const mongoose=require( "mongoose");

const videoSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    }
   
}, {timestamps: true});

const videoModel = mongoose.model('video', videoSchema);
module.exports=videoModel