const express = require("express")
const path = require("path")
const api = require("./api")
const database = require("./database")
const config = require('./config')

database.connect().then(db => {
  const app = express()

  app.use('/mdi', express.static(path.resolve(__dirname, '../node_modules/mdi')))
  app.use('/normalize', express.static(path.resolve(__dirname, '../node_modules/normalize.css')))
  app.use(express.static(config.paths.web))
  app.use(api(db))

  app.listen(config.server.port, () => {
    console.log(`Server listening on localhost:${config.server.port}`)
  })
})