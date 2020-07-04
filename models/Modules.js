const Sequelize = require('sequelize');
const db = require('../config/db');

const Subjects = require('./Subjects')

const ClassroomStudent = db.define('modules',{
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    due_at: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    cover: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

ClassroomStudent.belongsTo(Subjects)
module.exports = ClassroomStudent
