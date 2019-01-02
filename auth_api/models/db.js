
require('dotenv').config();
const mysql = require('mysql');

const common = require('../utils/common');

const pool = mysql.createPool({
  connectionLimit: process.env.DB_CONN_LIMIT,
  database: process.env.DB_NAME,
  debug: false,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  user: process.env.DB_USER

});

/**
 * Run SQL query on mysql
 * @param {String} query The sql query
 * @param {List} List of values for query
 * @param {function} callback What do with data?
 * @returns {void}
 */
function executeQuery(query, params ,callback) {
 
  pool.getConnection(function(err, connection) {
      if (err) {
        throw err;
      }
      
      connection.query(query, params ,function(error, rows, fields) {
          // console.log("query")
          // // console.log(error)
          // console.log(rows)
          // console.log(fields)
          connection.release();
          if (!error) {
              // console.log("Query Result:")
              // console.log(rows)
              // console.log(fields)
              callback(null, { rows });
          }else{
            callback(error, {message:"Error en query"})
          }
      });

      connection.on('error', function(error) {
            throw error;
      });
  });

}

/**
 * Run SQL query on mysql
 * @param {String} query The sql query
 * @returns {Promise} Promise with data or error
 */
function runQuery(query, params) {
  return new Promise(function(resolve, reject) {
    
    executeQuery(query, params ,function(error, data) {

      if (error) {
        reject(error);
      } else if (data.rows.length <= 0) {
          resolve({ result: 0 });
        } else {
          resolve(common.getReturnData(data));
        }

    });
  });
}

module.exports = {
  executeQuery,
  runQuery,

};
