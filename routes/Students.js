const router = require('express').Router()
const Models = require('../models');

router.get('/', async (req,res) => {
    await Models.Students.findAll().then((students) => {
        res.json({
            status: 200,
            students
        })
    })
})

module.exports = router