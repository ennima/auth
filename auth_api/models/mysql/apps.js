/**
 * Model for Apps schema
 *
 * Developed by Enrique Nieto Martínez
 * 2019-01-01 20:59:30
 */

const db = require('../db');

/**
 * Get a number of total apps
 * @returns {Promise} Promise with data or error
 */
function count() {
  return db.runQuery('SELECT COUNT(*) as total_apps FROM auth.apps;', []);
}


/**
 * Find a App by ID
 * @param {String} app_uid App uid
 * @returns {Promise} Promise with data or error
 */
function find(app_uid) {
  return db.runQuery(`SELECT * FROM auth.apps
      WHERE auth.apps.app_uid = ?;`, [app_uid]);
}


/**
 * Insert App
 * @param {String} app_uid App uid
 * @param {String} developer_uid Developer uid
 * @param {String} name Name
 * @param {String} token Token
 * @param {String} active Active
 * @returns {Promise} Promise with data or error
 */
function insert(app_uid, developer_uid, name, token, active) {
  return db.runQuery(`INSERT INTO auth.apps
        (app_uid, developer_uid, name, token, active)
        VALUES(?, ?, ?, ?, ?);`, [
        app_uid,
developer_uid,
name,
token,
active
]);
}


/**
 * Get a list of apps
 * @returns {Promise} Promise with data or error
 */
function list() {
  return db.runQuery('SELECT * FROM auth.apps;', []);
}


/**
 * Delete App by App ID
 * @param {String} app_uid App ID
 * @returns {Promise} Promise with data or error
 */
function remove(app_uid) {
  return db.runQuery(`DELETE FROM auth.apps
  WHERE auth.apps.app_uid = ?;`, [app_uid]);
}


/**
 * Update App
 * @param {String} app_uid App uid
 * @param {String} developer_uid Developer uid
 * @param {String} name Name
 * @param {String} token Token
 * @param {String} active Active
 * @returns {Promise} Promise with data or error
 */
function update(app_uid, developer_uid, name, token, active) {
  return db.runQuery(`UPDATE auth.apps
    SET app_uid = ?, developer_uid = ?, name = ?, token = ?, active = ?
    WHERE auth.apps.app_uid = ?;`, [
    app_uid,
developer_uid,
name,
token,
active,
app_uid
]);
}


/**
 * Update App only one column value
 * @param {String} app_uid App ID
 * @param {String} col_name Name of property
 * @param {String} val New value for property
 * @returns {Promise} Promise with data or error
 */
function updateCol(app_uid, col_name, val) {
  return db.runQuery(`UPDATE auth.apps
    SET ${col_name} = ?
    WHERE auth.apps.app_uid = ?;`, [
val,
app_uid
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
