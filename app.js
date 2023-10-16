const path = require("path");
const PORT = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const errorController = require('./controllers/error.controller')
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactRoutes = require('./routes/contactus')
const successRoutes = require('./routes/success')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes)
app.use(successRoutes)
app.use(errorController);


app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});
