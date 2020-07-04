const Sequelize = require('sequelize');
const db = require('../config/db');

const Subjects = require('./Subjects');
const Major = require('./Majors');

const MejorsSubjects = db.define('mejors_subjects', {
    
})
MejorsSubjects.belongsTo(Subjects)
MejorsSubjects.belongsTo(Major)
module.exports = MejorsSubjects