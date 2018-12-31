const db = require('./db');

/**
 * Get a list of roles
 * @returns {Promise} Promise with data or error
 */
function listRoles() {
  return db.runQuery('SELECT * FROM auth.roles;');
}

module.exports = {
listRoles
};