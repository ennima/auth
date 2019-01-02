/**
 * Model for Licenses schema
 *
 * Developed by Enrique Nieto Martínez
 * 2019-01-01 21:12:20
 */

const db = require('../db');

/**
 * Get a number of total licenses
 * @returns {Promise} Promise with data or error
 */
function count() {
  return db.runQuery(`SELECT COUNT(*) as total_licenses 
    FROM auth.licenses;`, []);
}


/**
 * Find a License by ID
 * @param {String} lic_uid Lic uid
 * @returns {Promise} Promise with data or error
 */
function find(lic_uid) {
  return db.runQuery(`SELECT * FROM auth.licenses
      WHERE auth.licenses.lic_uid = ?;`, [lic_uid]);
}


/**
 * Insert License
 * @param {String} lic_uid Lic uid
 * @param {String} developer_uid Developer uid
 * @param {String} app_uid App uid
 * @param {String} active_token Active token
 * @param {String} created Created
 * @param {String} user_uid User uid
 * @param {String} host_uid Host uid
 * @returns {Promise} Promise with data or error
 */
function insert(lic_uid, developer_uid, app_uid, active_token, created, user_uid, host_uid) {
  return db.runQuery(`INSERT INTO auth.licenses
        (lic_uid, developer_uid, app_uid, active_token, 
        created, user_uid, host_uid)
        VALUES(?, ?, ?, ?, ?, ?, ?);`, [
        lic_uid,
developer_uid,
app_uid,
active_token,
created,
user_uid,
host_uid
]);
}


/**
 * Get a list of licenses
 * @returns {Promise} Promise with data or error
 */
function list() {
  return db.runQuery('SELECT * FROM auth.licenses;', []);
}


/**
 * Delete License by License ID
 * @param {String} lic_uid License ID
 * @returns {Promise} Promise with data or error
 */
function remove(lic_uid) {
  return db.runQuery(`DELETE FROM auth.licenses
  WHERE auth.licenses.lic_uid = ?;`, [lic_uid]);
}


/**
 * Update License
 * @param {String} lic_uid Lic uid
 * @param {String} developer_uid Developer uid
 * @param {String} app_uid App uid
 * @param {String} active_token Active token
 * @param {String} created Created
 * @param {String} user_uid User uid
 * @param {String} host_uid Host uid
 * @returns {Promise} Promise with data or error
 */
function update(lic_uid, developer_uid, app_uid, active_token, created, user_uid, host_uid) {
  return db.runQuery(`UPDATE auth.licenses
    SET lic_uid = ?, developer_uid = ?, app_uid = ?, 
    active_token = ?, created = ?, user_uid = ?, host_uid = ?
    WHERE auth.licenses.lic_uid = ?;`, [
    lic_uid,
developer_uid,
app_uid,
active_token,
created,
user_uid,
host_uid,
lic_uid
]);
}


/**
 * Update License only one column value
 * @param {String} lic_uid License ID
 * @param {String} col_name Name of property
 * @param {String} val New value for property
 * @returns {Promise} Promise with data or error
 */
function updateCol(lic_uid, col_name, val) {
  return db.runQuery(`UPDATE auth.licenses
    SET ${col_name} = ?
    WHERE auth.licenses.lic_uid = ?;`, [
val,
lic_uid
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
