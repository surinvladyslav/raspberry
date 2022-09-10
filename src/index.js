const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '../public');
});

const port = 4000;
app.listen(port, () => console.log(`Server is running on port ${port}.`))

module.exports = app;

