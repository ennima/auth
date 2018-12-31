const db = require('./db');

/**
 * Get a list of users
 * @returns {Promise} Promise with data or error
 */
function listUsers() {
  return db.runQuery('SELECT * FROM auth.users;');
}

module.exports = {
listUsers
};
