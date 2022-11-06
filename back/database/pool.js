const { Pool } = require("pg");

const configs = require("../config/db-config");

// Current config
const config = configs.development;

// The database clients pool
const pool = new Pool(config);

module.exports = pool;
