const Sequelize = require('sequelize');
const db = require('../config/db');

const Professor = require('./Professors');
const Subjects = require('./Subjects');


const Classroom = db.define('classroom',{
    semester: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
    
})

Classroom.belongsTo(Professor)
Classroom.belongsTo(Subjects)
module.exports = Classroom