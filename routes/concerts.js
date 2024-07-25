const express = require('express')
const router = express.Router()
const data = require('../views/layouts/metaData')

router.get('/upcoming', (req, res) => {
  res.render('upcoming', { ...data.upcoming })
})

router.get('/videos', (req, res) => {
  res.render('videos', { ...data.videos })
})

module.exports = router