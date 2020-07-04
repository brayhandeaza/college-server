const router = require('express').Router()
const Models = require('../models');

router.get('/', async (req,res) => {
    await Models.Professors.findAll().then((professors) => {
        res.json({
            status: 200,
            professors
        })
    })
})

module.exports = router