// index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Example endpoint: /pair (for pairing or generating a code)
app.get('/pair', (req, res) => {
    const number = req.query.number;
    if (!number) {
        return res.status(400).json({ error: 'No number provided' });
    }

    // Generate a random code (example)
    const code = Math.floor(1000 + Math.random() * 9000);  // Random 4-digit code
    res.json({ code: code });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
