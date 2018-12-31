var express = require('express');
var router = express.Router();

require('dotenv').config();

console.log(process.env.SECRET_KEY)

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
