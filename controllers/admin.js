const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
};
exports.getEditProduct = (req, res) => {
  const editMode = req.query.edit;
  const productId = req.params.productId;
  Product.findById(productId, (product) => {
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product,
    });
  });
};
exports.postEditProduct = (req, res) => {
  const id = req.body.productId;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(id, title, imageUrl, description, price);
  product.save();
  res.redirect("/admin/products");
};

exports.postDeleteProduct = (req, res) => {
  const prodId = req.body.productId;
  Product.delete(prodId)
    .then(() => res.redirect("/admin/products"))
    .catch((error) => console.log(error));
};

exports.getProducts = (req, res) => {
  Product.fetchAll()
    .then(([products, meta]) =>
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      })
    )
    .catch((error) => console.log(error));
};
