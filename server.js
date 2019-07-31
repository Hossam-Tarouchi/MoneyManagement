const http = require('http');
const app = require('./app');

//precising the port that our API will listen on it. It will use, if it's defined, the port defined in env variable. if not it will listen on 8500
const port = process.env.port || 8500;

const server = http.createServer(app);

server.listen(port, ()=>{
    console.log(`Listenning on port : ${port}`);
});