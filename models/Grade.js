const Sequelize = require('sequelize');
const db = require('../config/db');

const Subjects = require('./Subjects');
const Students = require('./Students');
const Classrooms = require('./Classrooms');

const Grade = db.define('grade', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    grade: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
Grade.belongsTo(Students)
Grade.belongsTo(Subjects)
Grade.belongsTo(Classrooms)
module.exports = Grade