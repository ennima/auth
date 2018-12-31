const db = require('./db');

/**
 * Get a list of hosts
 * @returns {Promise} Promise with data or error
 */
function listHosts() {
  return db.runQuery('SELECT * FROM auth.hosts;');
}

module.exports = {
listHosts
};