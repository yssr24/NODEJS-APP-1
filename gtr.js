const express = require('express');
const router = express.Router();

router.get('/gtr', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Nissan GTR</title>
            <link rel="stylesheet" href="/design/styles.css">
            <style>
                .container {
                    border: 2px solid #4349c8;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <a href="/" class="back-button">Back</a>
                <h1>Nissan GTR</h1>
                <p>The Nissan GTR is a high-performance sports car with a rich history in racing.</p>
            </div>
        </body>
        </html>
    `);
});

module.exports = router;
