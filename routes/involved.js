const express = require('express')
const router = express.Router()

router.get('/giving', (req, res) => {
  res.render('giving')
})

router.get('/volunteer', (req, res) => {
  res.render('volunteer')
})

router.get('/sing', (req, res) => {
  res.render('sing')
})

module.exports = router