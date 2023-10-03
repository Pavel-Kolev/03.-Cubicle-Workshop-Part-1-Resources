const express = require("express");
const handlebarsConfig = require('./config/handlebarsConfig')
const expressConfig = require('./config/expressConfig')
const routes = require("./router")
const app = express()
const { Port } = require("./constants")

const dbConnect = require("./config/dbConfig")



handlebarsConfig(app)
expressConfig(app)

dbConnect().then(console.log("succesful connection to db")).catch(err => console.log(`Error has ocured while trying to link to DB:${err}`))

app.use(routes)

app.listen(Port)