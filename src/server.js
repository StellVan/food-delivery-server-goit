const http = require("http");
const url = require("url");
const requestHandler = require("./requestHandler");

const startServer = port => {
  const server = http.createServer(requestHandler);

  server.listen(port, err => {
    if (err) {
      console.log("error");
    } else {
      console.log(`server is listening on ${port}`);
    }
  });
};

module.exports = startServer;
