const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./notes.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`CREATE INDEX IF NOT EXISTS idx_notes_updated_at ON notes(updated_at DESC);`);
  db.run(`CREATE INDEX IF NOT EXISTS idx_notes_title ON notes(title);`);
});

module.exports = db;
