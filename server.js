const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const items = require('./models/items.json')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({
  extended : false
}))

app.get('/', (req, res) => {
  // res.send('Hello World')
  res.render('index', {items})
})

app.get('/profile/:name', (req, res) => {
  res.render('profile', {
    name : req.params.name
  })
})

app.get('/profile', (req, res) => {
  res.render('profile')
})

app.post('/profile', (req, res) => {
  let name = req.body.name
  console.log(req.body);
  res.render('profile', {
    name
  })
})

app.get('/detail/:id', (req, res) => {
  let detail = items.find(item => item.id === parseInt(req.params.id))
  console.log(detail);
  res.render('detail', {detail})
})

app.listen(5432, () => {
  console.log('Magic happened at 127.0.0.1:5432')
})
