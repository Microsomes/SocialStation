const http = require('http');
//imported http
const app = require("./app");


const port = 8081;

const server= http.createServer(app);

server.listen(port);



















