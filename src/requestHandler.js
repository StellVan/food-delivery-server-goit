// const router = require("./routes/router");
let url = require("url");
const signUpRoute = require("./routes/users/sign-up-route");
const productsRoute = require("./routes/products/products");

let requestHandler = (req, res) => {
  let path = url.parse(req.url).pathname;
  switch (path) {
    case "/signup":
      signUpRoute(req, res);
      break;
    case "/products":
      productsRoute(req, res);
      break;
  }
};

module.exports = requestHandler;
