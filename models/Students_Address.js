const Sequelize = require('sequelize');
const db = require('../config/db');
const Students = require('./Students');

const StudentsAddress = db.define('students_address', {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zipcode: {
        type: Sequelize.STRING,
        allowNull: true
    },
    country: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

StudentsAddress.hasMany(Students)
module.exports = StudentsAddress