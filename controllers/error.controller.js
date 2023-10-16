function getErrorPage(req, res) {
  res.status(404).render("404", { pageTitle: "Page Not Found!", path: 'Error' });
}

module.exports = getErrorPage;
