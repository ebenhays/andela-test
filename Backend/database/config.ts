const sqlite3 = require("sqlite3").verbose();
let dbConn = new sqlite3.Database(":memory:", (err) => {
  if (err) return console.error(err.message);
  console.log("Database connected successfully");
  dbConn.run(
    `CREATE TABLE students(
        student_id INTEGER PRIMARY KEY,
        full_name TEXT NOT NULL, 
        age INT NOT NULL, 
        course TEXT NOT NULL)`,
    (err) => {
      if (err) return console.error(err.message);
      console.log("Table created successfully");
    }
  );
});

module.exports = dbConn;
