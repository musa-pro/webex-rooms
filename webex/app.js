const express = require('express');
const app = express();
const port = 3000;
const RoomsInfo = require('./RoomsInfo.js');

app.get('/', (req, res) => res.send('Running'));
app.get('/rooms', (req, res) => {
    
res.header("Access-Control-Allow-Origin", "*");
    res.send(RoomsInfo.rooms);
});
app.get('/availabilities', (req, res) => {
    
res.header("Access-Control-Allow-Origin", "*");
    res.send(RoomsInfo.availabilities);
});

app.listen(port, () => console.log(`app listening on port ${port}!`));