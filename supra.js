const express = require('express');
const router = express.Router();

router.get('/supra', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Toyota Supra</title>
            <link rel="stylesheet" href="/design/styles.css">
            <style>
                .container {
                    border: 2px solid #9d0f0b;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <a href="/" class="back-button">Back</a>
                <h1>Toyota Supra</h1>
                <p>The Toyota Supra is a legendary sports car known for its performance and style.</p>
            </div>
        </body>
        </html>
    `);
});

module.exports = router;
