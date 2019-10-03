const fs = require("fs");

const productsRoute = (request, response) => {
  const filePath = "./src/db/products/all-products.json";
  if (request.method == "GET") {
    const readStream = fs.createReadStream(filePath);
    response.writeHead(200, {
      "Content-Type": "application/json"
    });
    readStream.pipe(response);
  }
};

module.exports = productsRoute;
