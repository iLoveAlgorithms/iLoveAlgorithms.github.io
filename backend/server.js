import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files (CSS, JS, images)
app.use(express.static('public'));

// Route for Level 3
app.get('/task3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'level3.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});