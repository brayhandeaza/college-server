const router = require('express').Router()
const Models = require('../models');

router.get('/', async (req,res) => {
    await Models.Majors.findAll().then((majors) => {
        res.json({
            status: 200,
            majors
        })
    })
})

module.exports = router