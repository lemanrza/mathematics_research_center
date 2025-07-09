const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const advertisementRouter = require("./src/routes/AdvertisementRoute")
const newsRouter = require("./src/routes/NewsRoute")


const app = express()
const path=require("path")
const errorHandler = require("./src/middlewares/errorHandler")
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100
})
//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cors())
app.use(limiter)
app.use(helmet())
app.use("/advertisements", advertisementRouter)
app.use("/news", newsRouter)



app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "src/views/index.html"));
});

app.use(errorHandler)
module.exports = app