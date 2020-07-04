const router = require('express').Router()
const Models = require('../models');

router.get('/', async (req,res) => {
    await Models.Subjects.findAll().then((subjects) => {
        res.json({
            status: 200,
            subjects
        })
    })
})


module.exports = router