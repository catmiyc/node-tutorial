const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("welcome");
// });

// using Event Emitter api
const server = http.createServer();

// emit request event
// subscribe to it / listen for it / response to it
server.on("request", (req, res) => {
  res.end("welcome");
});
server.listen(5000);
