const express = require("express");
const crypto = require("crypto")

const app = express();
const port = process.env.PORT || 3000;

const randomString = crypto.randomUUID();
const timestamp = new Date().toISOString();

setInterval(() => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${randomString}`);
}, 5000);

app.get('/', (req, res) => {
    const timestamp = new Date().toISOString();
    const message = `${timestamp}: ${randomString}`;
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title> Log Output </title>
            </head>
            <body>
                <p>${message}</p>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});