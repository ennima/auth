const express = require('express');
const router = express.Router();

/* Run tricks */
const tricks = require('../utils/tricks')
if (process.env.DB_TYPE === 'mysql'){
	tricks.mysqlPollConnection()	
}


// const user_model = require('../models/mysql/hosts')

// user_model.insert("host_uid", "nics", "name", "os", "ram", "cpu", "storage", "location")
// .then((data)=>{
// 	console.log(data)
// })
// .catch((err)=>{
// 	console.log(err)
// })

const roles_ctrl = require('../services/roles')
/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Express' });
  const vals = roles_ctrl.getAllRoles()
 	.then((data)=>{
 		console.log("asdf")
 		console.log(data)
 		res.json(data)
 	})
 	.catch((err)=>{
 		res.send(err)
 	})

});

module.exports = router;
