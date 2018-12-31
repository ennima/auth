const db = require('./db');

/**
 * Get a list of locations
 * @returns {Promise} Promise with data or error
 */
function listLocations() {
  return db.runQuery('SELECT * FROM auth.locations;');
}

module.exports = {
listLocations
};