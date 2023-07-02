const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('BMI Calculator')
})

app.listen(3000)