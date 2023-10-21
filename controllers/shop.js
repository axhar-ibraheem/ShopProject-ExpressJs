const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res) => {
  Product.fetchAll()
    .then(([products, meta]) =>
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
      })
    )
    .catch((error) => console.log(error));
};

exports.getProduct = (req, res) => {
  const prodId = req.params.productId;

  Product.findById(prodId)
    .then(([product]) =>
      res.render("shop/product-detail", {
        product: product[0],
        pageTitle: product.title,
        path: "/products",
      })
    )
    .catch((error) => console.log(error));
};
exports.getIndex = (req, res) => {
  Product.fetchAll()
    .then(([products, meta]) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

exports.postCart = (req, res) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

exports.getOrders = (req, res) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
