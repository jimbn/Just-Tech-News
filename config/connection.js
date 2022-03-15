// import the Sequelize construtor form the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MySWL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
  
  module.exports = sequelize;