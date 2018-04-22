const userController = require('../controllers/user.controller')
const express = require('express')
const usersRouter = express.Router()

usersRouter.route('/')
  /*.get(userController.list)*/
  .post(userController.searchUser);

usersRouter.route('/:id')
  .get(userController.find)
  .put(userController.update)
  .delete(userController.remove);

module.exports = usersRouter