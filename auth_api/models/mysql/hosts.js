/**
 * Model for Hosts schema
 *
 * Developed by Enrique Nieto Martínez
 * 2019-01-01 21:06:08
 */

const db = require('../db');

/**
 * Get a number of total hosts
 * @returns {Promise} Promise with data or error
 */
function count() {
  return db.runQuery('SELECT COUNT(*) as total_hosts FROM auth.hosts;', []);
}


/**
 * Find a Host by ID
 * @param {String} host_uid Host uid
 * @returns {Promise} Promise with data or error
 */
function find(host_uid) {
  return db.runQuery(`SELECT * FROM auth.hosts
      WHERE auth.hosts.host_uid = ?;`, [host_uid]);
}


/**
 * Insert Host
 * @param {String} host_uid Host uid
 * @param {String} nics Nics
 * @param {String} name Name
 * @param {String} os Os
 * @param {String} ram Ram
 * @param {String} cpu Cpu
 * @param {String} storage Storage
 * @param {String} location Location
 * @returns {Promise} Promise with data or error
 */
function insert(host_uid, nics, name, os, ram, cpu, storage, location) {
  return db.runQuery(`INSERT INTO auth.hosts
        (host_uid, nics, name, os, ram, cpu, storage, location)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?);`, [
        host_uid,
nics,
name,
os,
ram,
cpu,
storage,
location
]);
}


/**
 * Get a list of hosts
 * @returns {Promise} Promise with data or error
 */
function list() {
  return db.runQuery('SELECT * FROM auth.hosts;', []);
}


/**
 * Delete Host by Host ID
 * @param {String} host_uid Host ID
 * @returns {Promise} Promise with data or error
 */
function remove(host_uid) {
  return db.runQuery(`DELETE FROM auth.hosts
  WHERE auth.hosts.host_uid = ?;`, [host_uid]);
}


/**
 * Update Host
 * @param {String} host_uid Host uid
 * @param {String} nics Nics
 * @param {String} name Name
 * @param {String} os Os
 * @param {String} ram Ram
 * @param {String} cpu Cpu
 * @param {String} storage Storage
 * @param {String} location Location
 * @returns {Promise} Promise with data or error
 */
function update(host_uid, nics, name, os, ram, cpu, storage, location) {
  return db.runQuery(`UPDATE auth.hosts
    SET host_uid = ?, nics = ?, name = ?, os = ?, 
    ram = ?, cpu = ?, storage = ?, location = ?
    WHERE auth.hosts.host_uid = ?;`, [
    host_uid,
nics,
name,
os,
ram,
cpu,
storage,
location,
host_uid
]);
}


/**
 * Update Host only one column value
 * @param {String} host_uid Host ID
 * @param {String} col_name Name of property
 * @param {String} val New value for property
 * @returns {Promise} Promise with data or error
 */
function updateCol(host_uid, col_name, val) {
  return db.runQuery(`UPDATE auth.hosts
    SET ${col_name} = ?
    WHERE auth.hosts.host_uid = ?;`, [
val,
host_uid
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
