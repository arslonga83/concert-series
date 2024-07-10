const express = require('express')
const router = express.Router()

router.get('/donate', (req, res) => {
  res.render('donate')
})

router.get('/volunteer', (req, res) => {
  res.render('volunteer')
})

router.get('/sing', (req, res) => {
  res.render('sing')
})

module.exports = router