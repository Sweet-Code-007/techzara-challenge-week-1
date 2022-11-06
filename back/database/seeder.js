const users = [
  {
    firstname: "Onjaniaina",
    lastname: "Rolland",
    title: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore recusandae, earum sint culpa pariatur doloremque cum quas nobis ut ad optio alias dolor. Dignissimos eos nesciunt accusantium ab accusamus.",
    photo: "johndoe.jpg",
  },
  {
    firstname: "Tolojanahary",
    lastname: "Fenomanantsoa",
    title: "React.js Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore recusandae, earum sint culpa pariatur doloremque cum quas nobis ut ad optio alias dolor. Dignissimos eos nesciunt accusantium ab accusamus.",
    photo: "johndoe.jpg",
  },
  {
    firstname: "Tolotra",
    lastname: "Mandresy",
    title: "Full-stack javascript developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore recusandae, earum sint culpa pariatur doloremque cum quas nobis ut ad optio alias dolor. Dignissimos eos nesciunt accusantium ab accusamus.",
    photo: "johndoe.jpg",
  },
  {
    firstname: "Noir",
    lastname: "Dev",
    title: "PHP Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore recusandae, earum sint culpa pariatur doloremque cum quas nobis ut ad optio alias dolor. Dignissimos eos nesciunt accusantium ab accusamus.",
    photo: "johndoe.jpg",
  },
  {
    firstname: "Raf",
    lastname: "Eric",
    title: "Full-stack Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore recusandae, earum sint culpa pariatur doloremque cum quas nobis ut ad optio alias dolor. Dignissimos eos nesciunt accusantium ab accusamus.",
    photo: "johndoe.jpg",
  },
  {
    firstname: "Maric",
    lastname: "Donal",
    title: "C# Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore recusandae, earum sint culpa pariatur doloremque cum quas nobis ut ad optio alias dolor. Dignissimos eos nesciunt accusantium ab accusamus.",
    photo: "johndoe.jpg",
  },
  {
    firstname: "Toavina",
    lastname: "Tokiniaina",
    title: "Data scientist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore recusandae, earum sint culpa pariatur doloremque cum quas nobis ut ad optio alias dolor. Dignissimos eos nesciunt accusantium ab accusamus.",
    photo: "johndoe.jpg",
  },
];

const skills = [
  {
    name: "HTML",
    photo: "HTML5.png",
  },
  {
    name: "CSS",
    photo: "CSS5.png",
  },
  {
    name: "Javascript",
    photo: "javascript.png",
  },
  {
    name: "Typescript",
    photo: "typescript.png",
  },
  {
    name: "React JS",
    photo: "react.png",
  },
  {
    name: "PHP",
    photo: "php.png",
  },
  {
    name: "Symfony",
    photo: "symfony.png",
  },
  {
    name: "Laravel",
    photo: "laravel.png",
  },
  {
    name: "Python",
    photo: "python.png",
  },
  {
    name: "Node JS",
    photo: "nodejs.png",
  },
  {
    name: "C#",
    photo: "csharp.png",
  },
  {
    name: ".NET",
    photo: "dotnet.png",
  },
];

const users_skills = [
  {
    user_id: 1,
    skill_id: 1,
  },
  {
    user_id: 1,
    skill_id: 2,
  },
  {
    user_id: 1,
    skill_id: 3,
  },
  {
    user_id: 1,
    skill_id: 6,
  },
  {
    user_id: 2,
    skill_id: 1,
  },
  {
    user_id: 2,
    skill_id: 2,
  },
  {
    user_id: 2,
    skill_id: 3,
  },
  {
    user_id: 2,
    skill_id: 4,
  },
  {
    user_id: 2,
    skill_id: 5,
  },
  {
    user_id: 2,
    skill_id: 6,
  },
  {
    user_id: 2,
    skill_id: 8,
  },
  {
    user_id: 3,
    skill_id: 1,
  },
  {
    user_id: 3,
    skill_id: 2,
  },
  {
    user_id: 3,
    skill_id: 3,
  },
  {
    user_id: 3,
    skill_id: 4,
  },
  {
    user_id: 3,
    skill_id: 5,
  },
  {
    user_id: 3,
    skill_id: 10,
  },
  {
    user_id: 4,
    skill_id: 1,
  },
  {
    user_id: 4,
    skill_id: 2,
  },
  {
    user_id: 4,
    skill_id: 6,
  },
  {
    user_id: 4,
    skill_id: 7,
  },
  {
    user_id: 5,
    skill_id: 1,
  },
  {
    user_id: 5,
    skill_id: 2,
  },
  {
    user_id: 5,
    skill_id: 3,
  },
  {
    user_id: 5,
    skill_id: 6,
  },
  {
    user_id: 6,
    skill_id: 1,
  },
  {
    user_id: 6,
    skill_id: 2,
  },
  {
    user_id: 6,
    skill_id: 3,
  },
  {
    user_id: 6,
    skill_id: 4,
  },
  {
    user_id: 6,
    skill_id: 11,
  },
  {
    user_id: 6,
    skill_id: 12,
  },
  {
    user_id: 7,
    skill_id: 1,
  },
  {
    user_id: 7,
    skill_id: 2,
  },
  {
    user_id: 7,
    skill_id: 3,
  },
  {
    user_id: 7,
    skill_id: 4,
  },
  {
    user_id: 7,
    skill_id: 5,
  },
  {
    user_id: 7,
    skill_id: 9,
  },
  {
    user_id: 7,
    skill_id: 10,
  },
];

const projects = [
  {
    name: "Techzara online platform",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde consequuntur quisquam eius fugiat magnam asperiores.",
    photo: "techzara.jpg",
  },
  {
    name: "Sweet Code portfolio",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde consequuntur quisquam eius fugiat magnam asperiores.",
    photo: "sweet-code.jpg",
  },
];

// Creates an insert into query
function createInsertIntoQuery(table, columns, rows) {
  let query = `INSERT INTO ${table} (${columns.join(", ")}) VALUES`;
  rows.forEach((row, i) => {
    if (i > 0) query += ", ";
    query += " (";
    columns.forEach((col, i) => {
      if (i > 0) query += ", ";
      query += typeof row[col] === "string" ? `'${row[col]}'` : row[col];
    });
    query += ")";
  });
  return query;
}

// Seeds the database
async function seedDB() {
  const pool = require("./pool");
  await pool.query(createInsertIntoQuery("users", ["firstname", "lastname", "title", "description", "photo"], users));
  console.log("Users table seeded ...");
  await pool.query(createInsertIntoQuery("skills", ["name", "photo"], skills));
  console.log("Skills table seeded ...");
  await pool.query(createInsertIntoQuery("users_skills", ["user_id", "skill_id"], users_skills));
  console.log("Users-Skills table seeded ...");
  await pool.query(createInsertIntoQuery("projects", ["name", "photo", "description"], projects));
  console.log("Projects table seeded ...");
}

module.exports = {
  seedDB,
};
