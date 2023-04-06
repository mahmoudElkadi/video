const express=require("express")
const Router=express.Router()
const {upload}=require("../../middlwera/multer")
const {uploadVideo,displayVideo}=require("./video")

Router.post ("/video",upload.single('file'),uploadVideo)

Router.get("/get/:id" ,displayVideo)

module.exports=Router