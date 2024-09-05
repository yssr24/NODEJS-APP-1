const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Home</title>
            <link rel="stylesheet" href="/design/home.css">
        </head>
        <body>
            <h1>[Select a Sports Car]</h1>
            <a href="/supra" class="button">Toyota Supra</a>
            <a href="/gtr" class="button">Nissan GTR</a>
            <a href="/mustang" class="button">Ford Mustang</a>
            <a href="/corvette" class="button">Chevrolet Corvette</a>
        </body>
        </html>
    `);
});

module.exports = router;
