const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");
const filePath = path.join(rootDir, "data", "products.json")
class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    fs.readFile(filePath, (err, filecontent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(filecontent);
      }
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
       return callback([]);
      }
      callback(JSON.parse(data));
    });
  }
}

module.exports = Product;
