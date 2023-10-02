const express = require('express');

const server = express();

const cors = require('cors')
require('dotenv').config()

console.log(process.env.PORT, process.env.NODE_ENV)

server.use(express.json());
server.use(cors())

server.get('/about', (req, res) => {
    res.json('This is the about page.')
})



const port = process.env.PORT || 9000

server.listen(port, () => {
    console.log(`port ${port} is working correctly`)
});