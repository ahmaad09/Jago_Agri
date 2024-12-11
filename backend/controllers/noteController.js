const db = require("../config/db");

// Get all notes for a user
exports.getNotes = (req, res) => {
  const userId = req.user.id; // Assumes authentication middleware adds user info to req
  const query = "SELECT * FROM notes WHERE user_id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Add a new note
exports.addNote = (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;
  const query = "INSERT INTO notes (user_id, title, content) VALUES (?, ?, ?)";
  db.query(query, [userId, title, content], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Note added successfully", noteId: result.insertId });
  });
};

// Update an existing note
exports.updateNote = (req, res) => {
  const { id, title, content } = req.body;
  const query = "UPDATE notes SET title = ?, content = ? WHERE id = ?";
  db.query(query, [title, content, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Note updated successfully" });
  });
};

// Delete a note
exports.deleteNote = (req, res) => {
  const { id } = req.body;
  const query = "DELETE FROM notes WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Note deleted successfully" });
  });
};
