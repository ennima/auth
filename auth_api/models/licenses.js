const db = require('./db');

/**
 * Get a list of licenses
 * @returns {Promise} Promise with data or error
 */
function listLicences() {
  return db.runQuery('SELECT * FROM auth.licenses;');
}

module.exports = {
listLicences
};