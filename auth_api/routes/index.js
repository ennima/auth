const express = require('express');
const router = express.Router();

/* Run tricks */
const tricks = require('../utils/tricks')
if (process.env.DB_TYPE === 'mysql'){
	tricks.mysqlPollConnection()	
}

const users_ctrl = require('../models/users')

console.log("List Users: ")
let prom = users_ctrl.listUsers()
.then(function(results){
	console.log(results.active)
})
.catch(function(err){
	console.log(err)
})


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
