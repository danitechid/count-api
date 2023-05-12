const express = require('express');
const route = require('../src/route/index');
const cors = require('cors');
const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(route);

app.listen(port, () => {
    try {
        console.log(`Running on ${port} without you`);
    } catch (error) {
        throw error;
    }
});