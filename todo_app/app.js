const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const currentTime = new Date().toISOString();
    const message = `Connected to server on port ${port} at time ${currentTime}`;
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title> Todo App </title>
            </head>
            <body>
                <p>${message}</p>
            </body>
        </html>
    `);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server started in port ${port}`);
});