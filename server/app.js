const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const advertisementRouter = require("./src/routes/AdvertisementRoute")
const newsRouter = require("./src/routes/NewsRoute")
const userRouter = require("./src/routes/AuthRoute")


const app = express()
const path = require("path")
const errorHandler = require("./src/middlewares/errorHandler")

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cors())
app.use(helmet())
app.use("/advertisements", advertisementRouter)
app.use("/news", newsRouter)
app.use("/auth", userRouter)

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "src/views/index.html"));
});

app.use(errorHandler)
module.exports = app