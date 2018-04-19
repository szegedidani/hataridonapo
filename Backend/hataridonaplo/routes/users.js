var express = require('express');
var router = express.Router();
const bodyparser = require('body-parser')

const app = express();
app.listen("4200", () => {
  console.log("Server is running ata port 4200");
})

app.all("/register", (req, res) => {
  console.log("access granted");
  res.send(req.body)
})


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;