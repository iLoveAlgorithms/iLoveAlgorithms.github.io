const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/message', (req, res) => {
    const { message } = req.body;
    console.log("Received message:", message);
    res.json({ reply: `Server received: ${message}` });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});