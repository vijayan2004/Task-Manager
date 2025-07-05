const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MySQL DB Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // 📝 Your MySQL username
  password: '1234',           // 📝 Your MySQL password
  database: 'taskdb'      // 📝 Your DB name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// ✅ Create tasks table if not exists
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    completed BOOLEAN DEFAULT false
  )
`;

db.query(createTableQuery, (err) => {
  if (err) console.error('Error creating table:', err);
});

// ✅ Routes

// Get all tasks
app.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch tasks' });
    res.json(results);
  });
});

// Get single task by ID
app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM tasks WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch task' });
    if (results.length === 0) return res.status(404).json({ error: 'Task not found' });
    res.json(results[0]);
  });
});

// Add new task ✅ FIXED JSON response
app.post('/tasks', (req, res) => {
  const { title, description, due_date, completed } = req.body;
  const query = 'INSERT INTO tasks (title, description, due_date, completed) VALUES (?, ?, ?, ?)';
  db.query(query, [title, description, due_date, completed], (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to add task' });
    res.status(201).json({ 
      id: result.insertId, 
      message: 'Task added successfully' 
    }); // ✅ Valid JSON
  });
});

// Update task
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, completed } = req.body;
  const query = 'UPDATE tasks SET title = ?, description = ?, due_date = ?, completed = ? WHERE id = ?';
  db.query(query, [title, description, due_date, completed, id], (err) => {
    if (err) return res.status(500).json({ error: 'Failed to update task' });
    res.json({ message: 'Task updated successfully' });
  });
});

// Delete task
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: 'Failed to delete task' });
    res.json({ message: 'Task deleted successfully' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
