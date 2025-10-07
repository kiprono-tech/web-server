const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
    res.send([{
        name: 'Andrew'
    }, {
        name: 'Sarah'
    }]);
});

app.get('/about', (req, res) => {
    res.send('<hi1>About Us</h1>');
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});