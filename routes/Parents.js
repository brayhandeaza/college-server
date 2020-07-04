const router = require('express').Router()
const Models = require('../models');

router.get('/', async (req,res) => {
    await Models.Parents.findAll().then((parents) => {
        res.json({
            status: 200,
            parents
        })
    })
})


module.exports = router