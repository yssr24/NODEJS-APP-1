const express = require('express');
const router = express.Router();

router.get('/mustang', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Ford Mustang</title>
            <link rel="stylesheet" href="/design/styles.css">
            <style>
                .container {
                    border: 2px solid #dcac2e;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <a href="/" class="back-button">Back</a>
                <h1>Ford Mustang</h1>
                <p>The Ford Mustang is an iconic American muscle car with a strong heritage.</p>
            </div>
        </body>
        </html>
    `);
});

module.exports = router;
