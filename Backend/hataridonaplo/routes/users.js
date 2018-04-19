var express = require('express');
var router = express.Router();
const bodyparser = require('body-parser');

const app = express();


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/', function (req, res, next) {
  res.send(req.body);
});

module.exports = router;