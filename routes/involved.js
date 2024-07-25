const express = require('express')
const router = express.Router()
const data = require('../views/layouts/metaData')


router.get('/donate', (req, res) => {
  res.render('donate', { ...data.donate })
})

router.get('/volunteer', (req, res) => {
  res.render('volunteer', { ...data.volunteer })
})

router.get('/sing', (req, res) => {
  res.render('sing', { ...data.sing })
})

module.exports = router