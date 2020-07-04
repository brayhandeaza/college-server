const router = require('express').Router()
const Models = require('../models');

router.get('/', async (req,res) => {
    await Models.StudentsClassroom.findAll().then((students_classroom) => {
        res.json({
            status: 200,
            students_classroom
        })
    })
})


module.exports = router