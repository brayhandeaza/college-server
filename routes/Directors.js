const router = require('express').Router()
const Models = require('../models');

router.get('/', async (req,res) => {
    await Models.Directors.findAll().then((majors) => {
        res.json({
            status: 200,
            majors
        })
    })
})

module.exports = router