/**
 * Model for Locations schema
 *
 * Developed by Enrique Nieto Martínez
 * 2019-01-01 21:17:09
 */

const db = require('../db');

/**
 * Get a number of total locations
 * @returns {Promise} Promise with data or error
 */
function count() {
  return db.runQuery(`SELECT COUNT(*) as total_locations 
    FROM auth.locations;`, []);
}


/**
 * Find a Location by ID
 * @param {String} location_uid Location uid
 * @returns {Promise} Promise with data or error
 */
function find(location_uid) {
  return db.runQuery(`SELECT * FROM auth.locations
      WHERE auth.locations.location_uid = ?;`, [location_uid]);
}


/**
 * Insert Location
 * @param {String} location_uid Location uid
 * @param {String} name Name
 * @param {String} company_uid Company uid
 * @param {String} piso Piso
 * @param {String} area Area
 * @returns {Promise} Promise with data or error
 */
function insert(location_uid, name, company_uid, piso, area) {
  return db.runQuery(`INSERT INTO auth.locations
        (location_uid, name, company_uid, piso, area)
        VALUES(?, ?, ?, ?, ?);`, [
        location_uid,
name,
company_uid,
piso,
area
]);
}


/**
 * Get a list of locations
 * @returns {Promise} Promise with data or error
 */
function list() {
  return db.runQuery('SELECT * FROM auth.locations;', []);
}


/**
 * Delete Location by Location ID
 * @param {String} location_uid Location ID
 * @returns {Promise} Promise with data or error
 */
function remove(location_uid) {
  return db.runQuery(`DELETE FROM auth.locations
  WHERE auth.locations.location_uid = ?;`, [location_uid]);
}


/**
 * Update Location
 * @param {String} location_uid Location uid
 * @param {String} name Name
 * @param {String} company_uid Company uid
 * @param {String} piso Piso
 * @param {String} area Area
 * @returns {Promise} Promise with data or error
 */
function update(location_uid, name, company_uid, piso, area) {
  return db.runQuery(`UPDATE auth.locations
    SET location_uid = ?, name = ?, company_uid = ?, piso = ?, area = ?
    WHERE auth.locations.location_uid = ?;`, [
    location_uid,
name,
company_uid,
piso,
area,
location_uid
]);
}


/**
 * Update Location only one column value
 * @param {String} location_uid Location ID
 * @param {String} col_name Name of property
 * @param {String} val New value for property
 * @returns {Promise} Promise with data or error
 */
function updateCol(location_uid, col_name, val) {
  return db.runQuery(`UPDATE auth.locations
    SET ${col_name} = ?
    WHERE auth.locations.location_uid = ?;`, [
val,
location_uid
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
