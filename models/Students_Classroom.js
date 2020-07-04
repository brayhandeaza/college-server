// const Sequelize = require('sequelize');
const db = require('../config/db');

const Classroom = require('./Classrooms')
const Students = require('./Students')

const ClassroomStudent = db.define('students_classroom',{})

ClassroomStudent.belongsTo(Classroom)
ClassroomStudent.belongsTo(Students)

module.exports = ClassroomStudent



