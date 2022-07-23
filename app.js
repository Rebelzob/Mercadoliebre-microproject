const express = require('express');
const app = express();
const path = require('path');


app.listen(3030, () => {
    console.log('Server is running on port 3030');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.use(express.static('public'));