const Product = require("../models/product");

function getAddProduct(req, res) {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
}
function postAddProduct(req, res) {
  const product = new Product(req.body.title);
  console.log(product);
  product.save();
  res.redirect("/");
}

function getProducts(req, res) {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
}
module.exports = {
  getAddProduct,
  postAddProduct,
  getProducts,
};
