const express = require('express');
const router = express.Router();
const db = require('./db');

// Add a new task
app.post('/tasks', (req, res) => {
  const { title, description, due_date, completed } = req.body;

  const sql = 'INSERT INTO tasks (title, description, due_date, completed) VALUES (?, ?, ?, ?)';
  db.query(sql, [title, description, due_date, completed], (err, result) => {
    if (err) {
      console.error('Error inserting task:', err);
      return res.status(500).json({ error: 'Failed to add task' }); // ✅ Proper error in JSON
    }
    res.status(201).json({
      id: result.insertId,
      message: 'Task added successfully' // ✅ Send valid JSON back
    });
  });
});



// Get all tasks
router.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks ORDER BY id DESC', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Get single task
router.get('/tasks/:id', (req, res) => {
  db.query('SELECT * FROM tasks WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
});

// Create task
router.post('/tasks', (req, res) => {
  const { title, description, due_date, completed } = req.body;
  db.query('INSERT INTO tasks (title, description, due_date, completed) VALUES (?, ?, ?, ?)', [title, description, due_date, completed], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: results.insertId });
  });
});

// Update task
router.put('/tasks/:id', (req, res) => {
  const { title, description, due_date, completed } = req.body;
  db.query('UPDATE tasks SET title = ?, description = ?, due_date = ?, completed = ? WHERE id = ?', [title, description, due_date, completed, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// Delete task
router.delete('/tasks/:id', (req, res) => {
  db.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

module.exports = router;
