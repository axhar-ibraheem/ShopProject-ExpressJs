 const products = [];
 
function getAddProduct(req, res, next) {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }
function postAddProduct(req, res) {
    products.push({ title: req.body.title });
    res.redirect('/');
  }

function getProducts(req, res){
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }
  module.exports = {
    getAddProduct,
    postAddProduct,
    getProducts,
  }