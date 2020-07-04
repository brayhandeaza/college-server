const Sequelize = require('sequelize');
const db = require('../config/db');

const Parents = db.define('parents', {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.DATE,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mobile: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    last_login_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    last_login_ip: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Parents