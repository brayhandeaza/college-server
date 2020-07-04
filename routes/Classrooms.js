const router = require('express').Router()
const Models = require('../models');

router.get('/', async (req,res) => {
    await Models.Classroom.findAll().then((classroom) => {
        res.json({
            status: 200,
            classroom
        })
    })
})


module.exports = router