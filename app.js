const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const ExpressError = require('./utils/ExpressError')
const ejsMate = require('ejs-mate');
const concertRoutes = require('./routes/concerts')
const involvedRoutes = require('./routes/involved')

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.use('/concerts', concertRoutes)
app.use('/involved', involvedRoutes)

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.all('*', (req, res, next) => {
  next(new ExpressError('Page not found', 404))
})

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err
  if(!err.message) err.message = 'Something Went Wrong!'
  res.status(statusCode)
  res.render('errors', { err })
  console.log(err)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})