const express = require('express')

const server = express()

const router = require('./router/project-rt.js')
server.use(express.json())
server.use('/api', router)

server.get('/', (req, res) => {
    res.send('Server up!')
})

module.exports = server