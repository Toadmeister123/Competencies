require('dotenv').config()
const express = require('express')
const sessions = require('express-session')
const ctrl = require('./controller')

const app = express (),
              {SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.json())
app.use(sessions ({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 100000000
  }
}))
app.use(express.static('public'))

//TOP LEVEL
app.use('/api/getNumbers', function(req, res, next){
    console.log(11111, '*Owen Wilson Wow*'),
    next()
})

//ROUTER LEVEL
var router = express.Router()

router.use(function(req, res, next){
  console.log('Time', Date.now())
  next()
})

app.listen( SERVER_PORT, () => console.log(`server is running on port ${SERVER_PORT}`))

app.get('/api/getNumbers', ctrl.getNumbers)

app.post('/api/createNumber', ctrl.createNumber)

app.put('/api/updateNumber/:id', ctrl.updateNumber)

app.get('/api/searchfornumber', ctrl.searchForNumber)