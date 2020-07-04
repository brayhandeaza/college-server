const Sequelize = require('sequelize');
const db = require('../config/db');

const Modules = require('./Modules');

const Attendence = db.define('attendence',{
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

Attendence.belongsTo(Modules)
module.exports = Attendence