const db = require('./db');

/**
 * Get a list of companies
 * @returns {Promise} Promise with data or error
 */
function listCompanies() {
  return db.runQuery('SELECT * FROM auth.companies;');
}

module.exports = {
listCompanies
};