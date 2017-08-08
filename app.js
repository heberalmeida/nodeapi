const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
const models = require('./models/index')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('X-HTTP-Method'))          // Microsoft
app.use(methodOverride('X-HTTP-Method-Override')) // Google/GData
app.use(methodOverride('X-Method-Override'))      // IBM
app.use(methodOverride('_method'))

app.use('/', routes)

const server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})


module.exports = app
