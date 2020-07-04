const Sequelize = require('sequelize');
const db = require('../config/db');

const Subjects = db.define('subjects',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },  
    credits: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cover: {
        type: Sequelize.STRING,
        allowNull: false
    },   
})

module.exports = Subjects