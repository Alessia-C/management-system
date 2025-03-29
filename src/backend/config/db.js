const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

sequelize.authenticate()
  .then(() => console.log("✅ Connesso al database"))
  .catch((err) => console.error("❌ Errore connessione DB:", err));

module.exports = sequelize;
