const express = require('express')
const router = express.Router()

const UsersController = require('../controller/UsersController')

router.get ('/users', UsersController.findAll.bind(UsersController))
router.get ('/users/:id', UsersController.findOne.bind(UsersController))
router.post('/users',      UsersController.create.bind(UsersController))
router.put ('/users/:id', UsersController.update.bind(UsersController))
router.delete('/users/:id', UsersController.delete.bind(UsersController))

module.exports = router