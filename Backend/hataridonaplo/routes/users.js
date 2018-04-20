var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


router.post('/', (req, res, next) => {
  let content =
    `<pre>
  ${JSON.stringify(req.body, null,  4)}
  </pre>`;
  res.send(content);
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Database data');
});


router.post('/', function (req, res, next) {
  res.send(req.body);
});


router.delete('/', function (req, res, next) {
  res.send('Deleted content');
});


router.put('/', (req, res, next) => {
  res.send(req.body)
});


module.exports = router;