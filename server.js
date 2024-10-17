const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());  // Enable CORS for cross-origin requests

// Your JSON server URL (local)
const jsonServerUrl = 'http://localhost:3000';

// Get all tasks
app.get('/api/tasks', (req, res) => {
  axios.get(`${jsonServerUrl}/tasks`)
    .then(response => res.json(response.data))
    .catch(err => res.status(500).json({ error: 'Error fetching tasks' }));
});

// Add a new task
app.post('/api/tasks', (req, res) => {
  axios.post(`${jsonServerUrl}/tasks`, req.body)
    .then(response => res.json(response.data))
    .catch(err => res.status(500).json({ error: 'Error adding task' }));
});

// Update a task
app.put('/api/tasks/:id', (req, res) => {
  axios.put(`${jsonServerUrl}/tasks/${req.params.id}`, req.body)
    .then(response => res.json(response.data))
    .catch(err => res.status(500).json({ error: 'Error updating task' }));
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  axios.delete(`${jsonServerUrl}/tasks/${req.params.id}`)
    .then(response => res.json(response.data))
    .catch(err => res.status(500).json({ error: 'Error deleting task' }));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
