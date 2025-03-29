const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nome del database
  process.env.DB_USER, // Utente
  process.env.DB_PASSWORD, // Password
  {
    host: process.env.DB_HOST, // Indirizzo del database
    dialect: 'mysql', // Usa MySQL
  }
);

sequelize.authenticate()
  .then(() => console.log('✅ Connesso al database MySQL'))
  .catch((err) => console.error('❌ Impossibile connettersi al database:', err));

module.exports = sequelize;
