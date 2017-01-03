const express = require("express")
const path = require("path")
const api = require("./api")
const database = require("./database")
const config = require('./config')

function init(db) {
  const app = express()

  app.use(express.static(config.paths.web))
  app.use(api(db))

  app.listen(config.server.port, () => {
    console.log(`Server listening on localhost:${config.server.port}`)
  })
}

function onDatabaseConnectError(err) {
  console.log(`Couldn't connect to database: ${err}`)
}

database.connect().then(init, onDatabaseConnectError)
