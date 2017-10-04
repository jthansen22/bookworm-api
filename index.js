import express from 'express';
import path from 'path';

// Initialize Express
const app = express();

app.post('/api/auth', (req, res) => {
  res.status(400).json({ errors: { global: "Invalid Credentials"}});
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Server Setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on Port: ${PORT}`);
});

