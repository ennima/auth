/**
 * Model for Roles schema
 *
 * Developed by Enrique Nieto Martínez
 * 2019-01-01 20:51:10
 */

const db = require('../db');

/**
 * Get a number of total roles
 * @returns {Promise} Promise with data or error
 */
function count() {
  return db.runQuery('SELECT COUNT(*) as total_roles FROM auth.roles;', []);
}


/**
 * Find a Role by ID
 * @param {String} role_uid Role uid
 * @returns {Promise} Promise with data or error
 */
function find(role_uid) {
  return db.runQuery(`SELECT * FROM auth.roles
      WHERE auth.roles.role_uid = ?;`, [role_uid]);
}


/**
 * Get roles from user
 * @param {String} uid User ID
 * @returns {Promise} Promise with data or error
 */
function getUserRoles(uid) {
    return db.runQuery(`SELECT * FROM auth.users 
        INNER JOIN auth.roles 
        ON auth.users.user_uid = auth.roles.user_uid 
        AND auth.roles.user_uid LIKE ?`, [uid]);
}


/**
 * Insert Role
 * @param {String} role_uid Role uid
 * @param {String} user_uid User uid
 * @param {String} role Role name
 * @param {String} app_uid App uid
 * @returns {Promise} Promise with data or error
 */
function insert(role_uid, user_uid, role, app_uid) {
  return db.runQuery(`INSERT INTO auth.roles
        (role_uid, user_uid, role, app_uid)
        VALUES(?, ?, ?, ?);`, [
        role_uid,
user_uid,
role,
app_uid
]);
}


/**
 * Get a list of roles
 * @returns {Promise} Promise with data or error
 */
function list() {
  return db.runQuery('SELECT * FROM auth.roles;', []);
}


/**
 * Get a list of user-role data by rolename
 * @param {String} role_name Role name
 * @returns {Promise} Promise with data or error
 */
function listUsersByRole(role_name) {
    return db.runQuery(`SELECT * FROM auth.users 
        INNER JOIN auth.roles 
        ON auth.users.user_uid = auth.roles.user_uid 
        AND auth.roles.role LIKE ?`, [role_name]);
}


/**
 * Delete Role by Role ID
 * @param {String} role_uid Role ID
 * @returns {Promise} Promise with data or error
 */
function remove(role_uid) {
  return db.runQuery(`DELETE FROM auth.roles
  WHERE auth.roles.role_uid = ?;`, [role_uid]);
}


/**
 * Update Role
 * @param {String} role_uid Role uid
 * @param {String} user_uid User uid
 * @param {String} role Role name
 * @param {String} app_uid App uid
 * @returns {Promise} Promise with data or error
 */
function update(role_uid, user_uid, role, app_uid) {
  return db.runQuery(`UPDATE auth.roles
    SET role_uid = ?, user_uid = ?, role = ?, app_uid = ?
    WHERE auth.roles.role_uid = ?;`, [
    role_uid,
user_uid,
role,
app_uid,
role_uid
]);
}


/**
 * Update Role only one column value
 * @param {String} role_uid Role ID
 * @param {String} col_name Name of property
 * @param {String} val New value for property
 * @returns {Promise} Promise with data or error
 */
function updateCol(role_uid, col_name, val) {
  return db.runQuery(`UPDATE auth.roles
    SET ${col_name} = ?
    WHERE auth.roles.role_uid = ?;`, [
val,
role_uid
]);
}


module.exports = {
    count,
    find,
    getUserRoles,
    insert,
    list,
    listUsersByRole,
    remove,
    update,
    updateCol
};
