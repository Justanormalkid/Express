const express = require("express");
const path = require("path");
const app = express();

app.get('/', (req, res) => {
    console.log("Inside get");
    res.send("Express");
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/download', (req, res) => {
        res.download("index.html");
})
app.listen(3000);