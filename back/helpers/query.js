// Creates an insert into query
module.exports.createInsertIntoQuery = function (table, columns, rows, returnsId = true) {
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
  if (returnsId) query += `RETURNING id`;
  return query;
};

// Creates an update query
module.exports.createUpdateQuery = function (table, data, where) {
  let query = `UPDATE ${table} SET `;
  let i = 0;
  for (column in data) {
    if (i > 0) query += ", ";
    query += `${column} = ${typeof data[column] === "string" ? `'${data[column]}'` : data[column]}`;
    i++;
  }
  if (where) query += ` WHERE ${where}`;
  console.log(query);
  return query;
};
