const router = require('express').Router()
const Models = require('../models');

router.get('/', async (req,res) => {
    await Models.Attendence.findAll().then((attendence) => {
        res.json({
            status: 200,
            attendence
        })
    })
})

module.exports = router