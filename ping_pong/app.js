const express = require("express");
const port = process.env.PORT || 3001;
const app = express();

let counter = 0

app.get('/pingpong', (req, res) => {
    counter++;
    res.send(`pong ${counter}`);
});

app.listen(port, () => {
    console.log(`Ping-pong server started on port ${port}`);
});