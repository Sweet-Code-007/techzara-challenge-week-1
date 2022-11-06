const pool = require("./pool");

const { runMigration, rollbackMigration } = require("./migration");

const { seedDB } = require("./seeder");

// Sets the setup and initial operations to the database database
function databaseSetup(
  options = {
    fresh: false, // Drops all exsiting tables and re-runs the migration
    seed: false, // Runs the seeder
  }
) {
  pool.connect(async (err) => {
    if (err) {
      return console.log("Failed to connect to Postgres ...");
    }
    console.log(`Connected to Postgres ...`);

    if (options?.fresh) {
      await rollbackMigration();
    }

    await runMigration();

    if (options?.seed) {
      await seedDB();
    }
  });
}

module.exports = {
  databaseSetup,
};
