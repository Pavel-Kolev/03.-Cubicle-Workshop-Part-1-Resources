const express = require("express");
const handlebarsConfig = require('./config/handlebarsConfig')
const expressConfig = require('./config/expressConfig')
const routes=require("./router")
const app = express()
const {Port}=require("./constants")

handlebarsConfig(app)
expressConfig(app)



app.use(routes)

app.listen(Port)