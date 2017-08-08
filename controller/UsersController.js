const models = require('../models')
const Users = models.Users

class UsersModel {
    create(request, response, next) {
        console.log(request)
        Users.create({
            name: request.body.name,
            age: request.body.age
        }).then(user => {
            const data = {
                error: 'false',
                message: 'User insert success!',
                data: user
            }

            response.send(data)
            next()
        })
    }

    findOne(request, response, next) {
        console.log(request.params)
        Users.find({
            where: {
                id: request.params.id
            }
        }).then(user => {
            const data = {
                error: 'false',
                data: user
            }

            response.send(data)
            next()
        })
    }

    findAll(request, response, next) {
        Users.findAll({})
            .then(users => {
                const data = {
                    error: 'false',
                    data: users
                }

                response.send(data)
                next()
            })
    }

    update(request, response, next) {
        console.log(request)
        Users.find({
            where: {
                'id': request.params.id
            }
        }).then(user => {
            if (user) {
                user.updateAttributes({
                    name: request.body.name,
                    age: request.body.age
                }).then(user => {
                    const data = {
                        error: 'false',
                        message: 'Update success!',
                        data: user
                    }

                    response.send(data)
                    next()
                })
            }
        })
    }

    delete(request, response, next) {
        Users.destroy({
            where: {
                id: request.params.id
            }
        }).then(user => {
            const data = {
                error: 'false',
                message: 'Delete Success!',
                data: user
            }

            response.send(data)
            next()
        })
    }
}

module.exports = new UsersModel()
