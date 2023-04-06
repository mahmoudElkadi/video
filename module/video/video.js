const videoModel =require( "../../DB/videoModel"); 
const path =require("path")

const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const dm = decimal || 2;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return (
      parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
    );
  };

const uploadVideo= async (req, res, next) => {
    try {
      
      const video = new videoModel({
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
      });
      await video.save();
      res.json({ message: "updated successfully", path: video.filePath });
    } catch (error) {
      return error
    }
  };

  
 const displayVideo= async (req, res, next) => {
    
  
      const video = await videoModel.findOne({_id:req.params.id});
      
      res.status(200).sendFile(path.resolve(video.filePath))
    
    }
 
  
module.exports= {uploadVideo,displayVideo}