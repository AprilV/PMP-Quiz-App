const db = require("./db");

db.query("SHOW DATABASES;", (err, results) => {
  if (err) {
    console.error("❌ Query error:", err);
    return;
  }
  console.log("✅ Databases:", results);
  db.end(); // Close the connection after the test
});
