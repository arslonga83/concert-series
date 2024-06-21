const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/season', (req, res) => {
  res.render('season')
})

app.get('/archive', (req, res) => {
  res.render('archive')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})