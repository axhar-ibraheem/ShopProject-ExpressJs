const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "node_complete",
  "root",
  "Hwzxfgqnr@87",
  {
    dialect: "mysql",
    host: "localhost",
  }
  
);

module.exports = sequelize;
