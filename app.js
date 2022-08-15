const express = require('express');
const app = express();
const path = require('path');


app.listen(3030, () => {
    console.log('Server is running on port 3030');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.use(express.static('public'));