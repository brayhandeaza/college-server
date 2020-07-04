const router = require('express').Router()
const Models = require('../models');

router.get('/', async (req,res) => {
    await Models.StudentsAddress.findAll().then((grade) => {
        res.json({
            status: 200,
            grade
        })
    })
})


module.exports = router