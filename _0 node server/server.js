const http = require('http');
//imported http
const app = require("./app");


const port = 8080;

const server= http.createServer(app);

server.listen(port);


















