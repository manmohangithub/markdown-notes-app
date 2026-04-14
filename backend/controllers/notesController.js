const db = require("../db");

exports.getNotes = (req, res) => {
  const { q } = req.query; // search query
  let sql = "SELECT * FROM notes";
  let params = [];

  if (q && q.trim()) {
    sql += " WHERE title LIKE ? OR content LIKE ?";
    const like = `%${q}%`;
    params = [like, like];
  }

  sql += " ORDER BY updated_at DESC";

  db.all(sql, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getNoteById = (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM notes WHERE id = ?", [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Not found" });
    res.json(row);
  });
};

exports.createNote = (req, res) => {
  const { title = "", content = "" } = req.body || {};
  if (!title.trim() && !content.trim()) {
    return res.status(400).json({ error: "Empty note not allowed" });
  }
  db.run(
    "INSERT INTO notes (title, content) VALUES (?, ?)",
    [title, content],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID });
    }
  );
};

exports.updateNote = (req, res) => {
  const { id } = req.params;
  const { title = "", content = "" } = req.body || {};
  db.run(
    "UPDATE notes SET title=?, content=?, updated_at=CURRENT_TIMESTAMP WHERE id=?",
    [title, content, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ error: "Not found" });
      res.json({ updated: this.changes });
    }
  );
};

exports.deleteNote = (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM notes WHERE id=?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: "Not found" });
    res.json({ deleted: this.changes });
  });
};
