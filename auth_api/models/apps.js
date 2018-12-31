const db = require('./db');

/**
 * Get a list of apps
 * @returns {Promise} Promise with data or error
 */
function listApps() {
  return db.runQuery('SELECT * FROM auth.apps;');
}

module.exports = {
listApps
};