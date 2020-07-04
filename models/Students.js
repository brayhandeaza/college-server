const Sequelize = require('sequelize');
const db = require('../config/db');

const Attendence = require('./Attendence');
const Parents = require('./Parents');

const Students = db.define('students',{
    unique_student_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
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
    passwords: {
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
    mobil: {
        type: Sequelize.STRING,
        allowNull: false
    },
    region: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date_of_join: {
        type: Sequelize.DATE,
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
    last_login_ip: { // New table
        type: Sequelize.STRING,
        allowNull: false
    }
})

Students.hasMany(Parents)
Students.hasMany(Attendence)
module.exports = Students