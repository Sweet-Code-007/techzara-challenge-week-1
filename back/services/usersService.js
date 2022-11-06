const fs = require("fs");
const pool = require("../database/pool");

const uploadsConfig = require("../config/uploads-config");

const { createInsertIntoQuery, createUpdateQuery } = require("../helpers/query");

module.exports.getUsers = async function getUsers() {
  const results = await pool.query(`
    SELECT id, firstname, lastname, title, created_at,
    CONCAT('${uploadsConfig.USERS_PATH}', photo) AS photo_url
    FROM users
  `);
  return results.rows;
};

async function getUser(id) {
  const results = await pool.query(`
  SELECT
  *,
  CONCAT('${uploadsConfig.USERS_PATH}', u.photo) AS photo_url,
  CONCAT('${uploadsConfig.SKILLS_PATH}', s.photo) AS skill_photo_url
  FROM users AS u
  LEFT JOIN users_skills AS us ON us.user_id = u.id
  JOIN skills AS s ON s.id = us.skill_id
  WHERE u.id = ${id}
  `);
  if (!results.rows[0]) return null;
  const user = {};
  ["id", "firstname", "lastname", "title", "description", "photo_url"].forEach((field) => {
    user[field] = results.rows[0][field];
  });
  if (results.rows[0].user_id === null) user.skills = [];
  else {
    user.skills = results.rows.map((row) => {
      return {
        id: row.skill_id,
        name: row.name,
        photo_url: row.skill_photo_url,
      };
    });
  }
  return user;
}

module.exports.getUser = async function (id) {
  const results = await pool.query(`
  SELECT
  *,
  CONCAT('${uploadsConfig.USERS_PATH}', u.photo) AS photo_url,
  CONCAT('${uploadsConfig.SKILLS_PATH}', s.photo) AS skill_photo_url
  FROM users AS u
  LEFT JOIN users_skills AS us ON us.user_id = u.id
  JOIN skills AS s ON s.id = us.skill_id
  WHERE u.id = ${id}
  `);
  if (!results.rows[0]) return null;
  const user = {};
  ["id", "firstname", "lastname", "title", "description", "photo_url", "photo"].forEach((field) => {
    user[field] = results.rows[0][field];
  });
  if (results.rows[0].user_id === null) user.skills = [];
  else {
    user.skills = results.rows.map((row) => {
      return {
        id: row.skill_id,
        name: row.name,
        photo_url: row.skill_photo_url,
      };
    });
  }
  return user;
};

// Creates a user
module.exports.createUser = async function (data) {
  const result = await pool.query(
    createInsertIntoQuery("users", ["firstname", "lastname", "title", "description"], [data])
  );
  const user = (
    await pool.query(`
  SELECT * FROM users WHERE id = ${result.rows[0].id}
  `)
  ).rows[0];
  await pool.query(
    createInsertIntoQuery(
      "users_skills",
      ["user_id", "skill_id"],
      data.skillIds.map((skill_id) => ({
        user_id: user.id,
        skill_id,
      })),
      false
    )
  );
  const skills = (
    await pool.query(`
  SELECT * FROM skills WHERE id IN (${data.skillIds.join(", ")})
  `)
  ).rows;
  return {
    ...user,
    skills,
  };
};

// Updates a user
module.exports.updateUser = async function (id, data) {
  await pool.query(
    createUpdateQuery(
      "users",
      {
        firstname: data.firstname,
        lastname: data.lastname,
        title: data.title,
        description: data.description,
      },
      `id = ${id}`
    )
  );
  return await getUser(id);
};

// Updates a user's photo
module.exports.updateUserPhoto = async function (id, photo) {
  const user = await getUser(id);
  if (!user) throw new Error("Missing user");
  if (user.photo) {
    await new Promise((resolve) => {
      fs.unlink(path.join(__dirname, "../", uploadsConfig.USERS_PATH, user.photo), async (err) => {
        resolve();
      });
    });
  }
  await pool.query(createUpdateQuery("users", { photo }, `id = ${id}`));
  return await getUser(id);
};
