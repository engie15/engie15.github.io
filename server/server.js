const path = require('path')

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

// server.use(bodyParser.json())
server.use(express.json())
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, '../public')))

module.exports = server