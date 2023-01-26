 
const { json } = require('body-parser');
const express = require('express');
const app = express();

data = {
    "id": 1,
    "first_name": "Locke",
    "last_name": "Tasker",
    "email": "ltasker0@a8.net",
    "gender": "Male",
    "ip_address": "101.14.74.146"
  }
app.get('/', (req, res) => {
    res.send('<h1 >API DATA BY DOMTOOT!<h1>');
});
app.get('/get-all-user', (req, res) => {
    res.send(data);
});

app.get('/auth', (req, res) => {
    res.send("!1");
});

app.listen(8080, () => {
    console.log('Server started on port 8080');
});
