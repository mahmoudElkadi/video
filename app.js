const express=require("express")
const mongoose=require( "mongoose");

const app = express()
const port = 3000
const Router=require("./module/video/video.routes")
const path=require("path")
app.use(express.static("/uploads"));
app.use(express.json())
app.use (Router)

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.get('/', (req, res) => res.send('Hello World!'))
const server = app.listen(port, async () => {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/video", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("DB Connected"));
    console.log(`Running on port ${port} ....`)});