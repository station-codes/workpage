var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', function (req, res) {
  res.send('work hompage')
})

// define the about route
router.get('/about', function (req, res) {
  res.render('index', {
    title:'about', 
    message:'this is me'
  });
})

// define the about route
router.get('/sailing', function (req, res) {
  res.render('home', {
    title: 'Welcome'
  });
})

module.exports = router


