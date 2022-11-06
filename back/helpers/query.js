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
