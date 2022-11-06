const pool = require("../database/pool");

const uploadsConfig = require("../config/uploads-config");

module.exports.getUsers = async function getUsers() {
  const results = await pool.query(`
    SELECT id, firstname, lastname, title, created_at,
    CONCAT('${uploadsConfig.USERS_PATH}', photo) AS photo_url
    FROM users
  `);
  return results.rows;
};

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
};
