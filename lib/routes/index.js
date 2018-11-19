const express = require('express')
const router = express.Router()
const plants = require('./plants/plants.controller')
router.use('/plants', plants)

module.exports = router
