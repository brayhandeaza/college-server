const { Sequelize } = require('sequelize')
module.exports = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
    dialect: "postgres",
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    dialectOptions: {
        ssl: true
    },
    define: {
        underscored: true
    }
})
      