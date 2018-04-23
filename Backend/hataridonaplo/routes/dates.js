const express = require('express');
const datesRouter = express.Router();
const datesController = require('../controllers/dates.controller')

datesRouter.route('/')
  .get(datesController.list)
  .post(datesController.create);
datesRouter.route('/:userId')
  .get(datesController.find)
  .put(datesController.update)
  .delete(datesController.remove);

module.exports = datesRouter;