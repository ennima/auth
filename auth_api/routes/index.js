const express = require('express');
const router = express.Router();

/* Run tricks */
const tricks = require('../utils/tricks')
if (process.env.DB_TYPE === 'mysql'){
	tricks.mysqlPollConnection()	
}


const roles_ctrl = require('../models/companies')

console.log("List Users: ")
let prom = roles_ctrl.listCompanies()
.then(function(results){
	console.log("Roles:")
	console.log(results.length)
})
.catch(function(err){
	console.log(err)
})


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
