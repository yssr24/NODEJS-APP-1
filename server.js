const express = require('express');
const app = express();
const port = 3000;

app.use('/design', express.static('design'));

const homeRoute = require('./routes/home');
const supraRoute = require('./routes/supra');
const gtrRoute = require('./routes/gtr');
const mustangRoute = require('./routes/mustang');
const corvetteRoute = require('./routes/corvette');

app.use('/', homeRoute);
app.use('/', supraRoute);
app.use('/', gtrRoute);
app.use('/', mustangRoute);
app.use('/', corvetteRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
