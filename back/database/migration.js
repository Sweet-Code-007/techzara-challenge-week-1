const pool = require("./pool");

// Users table creation query
const CREATE_USERS_TABLE_QUERY = `
CREATE SEQUENCE IF NOT EXISTS users_id_seq;
CREATE TABLE IF NOT EXISTS users (
  id INTEGER DEFAULT NEXTVAL('users_id_seq') PRIMARY KEY,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(80) NOT NULL,
  title VARCHAR(30) NOT NULL,
  description TEXT NOT NULL,
  photo VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)
`;

// Skills table creation query
const CREATE_SKILLS_TABLE_QUERY = `
CREATE SEQUENCE IF NOT EXISTS skills_id_seq;
CREATE TABLE IF NOT EXISTS skills (
  id INTEGER DEFAULT NEXTVAL('skills_id_seq') PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  photo VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)
`;

// Users-Skills table creation query
const USERS_SKILLS_TABLE_QUERY = `
CREATE TABLE IF NOT EXISTS users_skills (
  user_id INTEGER UNIQUE NOT NULL REFERENCES users (id),
  skill_id INTEGER UNIQUE NOT NULL REFERENCES skills (id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)
`;

// Projects table creation query
const CREATE_PROJECTS_TABLE_QUERY = `
CREATE SEQUENCE IF NOT EXISTS projects_id_seq;
CREATE TABLE IF NOT EXISTS projects (
  id INTEGER DEFAULT NEXTVAL('projects_id_seq') PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  photo VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)
`;

// Runs the migration
async function runMigration() {
  await pool.query(CREATE_USERS_TABLE_QUERY);
  console.log("Users table created ...");
  await pool.query(CREATE_SKILLS_TABLE_QUERY);
  console.log("Skills table created ...");
  await pool.query(USERS_SKILLS_TABLE_QUERY);
  console.log("Users-Skills table created ...");
  await pool.query(CREATE_PROJECTS_TABLE_QUERY);
  console.log("Projects table created ...");
}

// Rolls back the migration
async function rollbackMigration() {
  await pool.query(`DROP SCHEMA public CASCADE`);
  await pool.query(`CREATE SCHEMA public`);
  // await pool.query(`SELECT 'drop table if exists "' || tablename || '" CASCADE;' FROM pg_tables`);
  // await pool.query("DROP SEQUENCE IF EXISTS users_id_seq CASCADE");
  // await pool.query("DROP SEQUENCE IF EXISTS skills_id_seq CASCADE");
  console.log("Dropped all tables ...");
}

module.exports = {
  runMigration,
  rollbackMigration,
};
