/**
 * Model for Companies schema
 *
 * Developed by Enrique Nieto Martínez
 * 2019-01-01 21:04:16
 */

const db = require('../db');

/**
 * Get a number of total companies
 * @returns {Promise} Promise with data or error
 */
function count() {
  return db.runQuery(`SELECT COUNT(*) as total_companies 
    FROM auth.companies;`, []);
}


/**
 * Find a Companie by ID
 * @param {String} company_uid Company uid
 * @returns {Promise} Promise with data or error
 */
function find(company_uid) {
  return db.runQuery(`SELECT * FROM auth.companies
      WHERE auth.companies.company_uid = ?;`, [company_uid]);
}


/**
 * Insert Companie
 * @param {String} company_uid Company uid
 * @param {String} name Name
 * @param {String} nickname Nickname
 * @param {String} country Country
 * @param {String} state State
 * @param {String} address Address
 * @param {String} lat Lat
 * @param {String} lon Lon
 * @returns {Promise} Promise with data or error
 */
function insert(company_uid, name, nickname, country, state, address, lat, lon) {
  return db.runQuery(`INSERT INTO auth.companies
        (company_uid, name, nickname, country, state, address, lat, lon)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?);`, [
        company_uid,
name,
nickname,
country,
state,
address,
lat,
lon
]);
}


/**
 * Get a list of companies
 * @returns {Promise} Promise with data or error
 */
function list() {
  return db.runQuery('SELECT * FROM auth.companies;', []);
}


/**
 * Delete Companie by Companie ID
 * @param {String} company_uid Companie ID
 * @returns {Promise} Promise with data or error
 */
function remove(company_uid) {
  return db.runQuery(`DELETE FROM auth.companies
  WHERE auth.companies.company_uid = ?;`, [company_uid]);
}


/**
 * Update Companie
 * @param {String} company_uid Company uid
 * @param {String} name Name
 * @param {String} nickname Nickname
 * @param {String} country Country
 * @param {String} state State
 * @param {String} address Address
 * @param {String} lat Lat
 * @param {String} lon Lon
 * @returns {Promise} Promise with data or error
 */
function update(company_uid, name, nickname, country, state, address, lat, lon) {
  return db.runQuery(`UPDATE auth.companies
    SET company_uid = ?, name = ?, nickname = ?, country = ?, 
    state = ?, address = ?, lat = ?, lon = ?
    WHERE auth.companies.company_uid = ?;`, [
    company_uid,
name,
nickname,
country,
state,
address,
lat,
lon,
company_uid
]);
}


/**
 * Update Companie only one column value
 * @param {String} company_uid Companie ID
 * @param {String} col_name Name of property
 * @param {String} val New value for property
 * @returns {Promise} Promise with data or error
 */
function updateCol(company_uid, col_name, val) {
  return db.runQuery(`UPDATE auth.companies
    SET ${col_name} = ?
    WHERE auth.companies.company_uid = ?;`, [
val,
company_uid
]);
}


module.exports = {
    count,
    find,
    insert,
    list,
    remove,
    update,
    updateCol
};
