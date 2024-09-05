const express = require('express');
const router = express.Router();

router.get('/corvette', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Chevrolet Corvette</title>
            <link rel="stylesheet" href="/design/styles.css">
            <style>
                .container {
                    border: 2px solid #39d147;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <a href="/" class="back-button">Back</a>
                <h1>Chevrolet Corvette</h1>
                <p>The Chevrolet Corvette is known for its sleek design and impressive performance.</p>
            </div>
        </body>
        </html>
    `);
});

module.exports = router;
