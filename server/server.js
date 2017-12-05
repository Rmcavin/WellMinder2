const express = require('express')
const server = express()
const body-parser = require('body-parser')
const dotenv = require('dotenv')
const spawn = require('child_process').spawn
const PORT = process.env.PORT || 8000;

//Body Parser middleware
server.use(body-parser.json())

//static folders
server.use(express.static(path.join(__dirname, '/../react-ui', 'public')))
server.use(express.static(path.join(__dirname, '/../react-ui', 'build')))
server.use(express.static(path.join(__dirname, '/../', 'node_modules')))

//allow CORS
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

//get data for d3 and algorithm
server.get('/api/data', (req, res) => {
  //firebase stuff

  //python stuff
  let py = spawn('python', ['./venv/test.py'])
  data = res.data
  
})



//port
server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})

module.exports = server;
