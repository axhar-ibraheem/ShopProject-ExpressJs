 

function getContactForm(req, res) {
  res.render("contactus", {
    pageTitle: "Contact Us",
    path: "/contactus",
    contactusCSS: true,
    mainCSS: true,
  });
}

function sumbitForm(req, res) {
  res.render("success", {
    pageTitle: "Success",
    path: "/success",
    successCSS: true,
    mainCSS: true,
  });
}

module.exports = {
  getContactForm,
  sumbitForm,
};
