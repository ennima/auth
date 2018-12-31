
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
 * @param {function} callback What do with data?
 * @returns {void}
 */
function executeQuery(query, callback) {

  pool.getConnection(function(err, connection) {
      if (err) {
        throw err;
      }

      connection.query(query, function(error, rows) {
          connection.release();
          if (!error) {
              callback(null, { rows });
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
function runQuery(query) {
  return new Promise(function(resolve, reject) {

    executeQuery(query, function(error, data) {

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
  runQuery
};
