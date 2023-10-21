const path = require("path");
const db = require('./util/database')
const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const app = express();


app.set("view engine", "ejs");
app.set("views", "views");
db.execute('SELECT * FROM products')
.then(result => console.log(result[0]))
.catch(error => console.log(error))

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(3000, () => {
  console.log("server is listening on port 3000...");
});
