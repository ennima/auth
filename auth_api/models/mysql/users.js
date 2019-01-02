/**
 * Model for Users schema
 *
 * Developed by Enrique Nieto Martínez
 * 2019-01-01 20:54:20
 */

const db = require('../db');

/**
 * Get a number of total users
 * @returns {Promise} Promise with data or error
 */
function count() {
  return db.runQuery('SELECT COUNT(*) as total_users FROM auth.users;', []);
}


/**
 * Find a User by ID
 * @param {String} user_uid User uid
 * @returns {Promise} Promise with data or error
 */
function find(user_uid) {
  return db.runQuery(`SELECT * FROM auth.users
      WHERE auth.users.user_uid = ?;`, [user_uid]);
}


/**
 * Insert User
 * @param {String} user_uid User uid
 * @param {String} name Name
 * @param {String} pass Pass
 * @param {String} email Email
 * @param {String} active Active
 * @returns {Promise} Promise with data or error
 */
function insert(user_uid, name, pass, email, active) {
  return db.runQuery(`INSERT INTO auth.users
        (user_uid, name, pass, email, active)
        VALUES(?, ?, ?, ?, ?);`, [
        user_uid,
name,
pass,
email,
active
]);
}


/**
 * Get a list of users
 * @returns {Promise} Promise with data or error
 */
function list() {
  return db.runQuery('SELECT * FROM auth.users;', []);
}


/**
 * Delete User by User ID
 * @param {String} user_uid User ID
 * @returns {Promise} Promise with data or error
 */
function remove(user_uid) {
  return db.runQuery(`DELETE FROM auth.users
  WHERE auth.users.user_uid = ?;`, [user_uid]);
}


/**
 * Update User
 * @param {String} user_uid User uid
 * @param {String} name Name
 * @param {String} pass Pass
 * @param {String} email Email
 * @param {String} active Active
 * @returns {Promise} Promise with data or error
 */
function update(user_uid, name, pass, email, active) {
  return db.runQuery(`UPDATE auth.users
    SET user_uid = ?, name = ?, pass = ?, email = ?, active = ?
    WHERE auth.users.user_uid = ?;`, [
    user_uid,
name,
pass,
email,
active,
user_uid
]);
}


/**
 * Update User only one column value
 * @param {String} user_uid User ID
 * @param {String} col_name Name of property
 * @param {String} val New value for property
 * @returns {Promise} Promise with data or error
 */
function updateCol(user_uid, col_name, val) {
  return db.runQuery(`UPDATE auth.users
    SET ${col_name} = ?
    WHERE auth.users.user_uid = ?;`, [
val,
user_uid
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
