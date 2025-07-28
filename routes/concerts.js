const express = require('express')
const router = express.Router()
const data = require('../views/layouts/metaData')
const concertData = require('../routes/concertData')

router.get('/upcoming', (req, res) => {
  res.render('upcoming', { ...data.upcoming, concertData: concertData })
})

router.get('/videos', (req, res) => {
  res.render('videos', { ...data.videos, concertData: concertData })
})

module.exports = router