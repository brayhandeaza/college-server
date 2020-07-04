const Sequelize = require('sequelize');
const db = require('../config/db');
const Students = require('./Students');
const Directors = require('./Directors');


const Majors = db.define('majors', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cover: {
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
    }
})

Majors.hasMany(Students)
Majors.belongsTo(Directors)
module.exports = Majors