const express = require('express')
const router = express.Router()

router.get('/upcoming', (req, res) => {
  res.render('upcoming')
})

router.get('/videos', (req, res) => {
  res.render('videos')
})

module.exports = router