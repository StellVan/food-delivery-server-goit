const fs = require("fs");

const signUpRoute = (request, response) => {
  if (request.method == "POST") {
    request.on("data", data => {
      let body = JSON.parse(data);
      let username = body.username;
      let user = JSON.stringify(body);
      fs.writeFile(`./src/db/users/${username}.json`, user, err => {
        if (err) {
          console.log("Error");
        } else {
          console.log(body);
        }
      });
      response.writeHead(200, {
        "Content-Type": "application/json"
      });
      response.write(`{ "status": "success", "user": ${user} }`);
      response.end();
    });
  }
};

module.exports = signUpRoute;
