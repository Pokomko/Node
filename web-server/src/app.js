const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express
const publicDirPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars and views location
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Max Kiselyov',
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Max Kiselyov',
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        contactInfo: 'Contact info: ',
        helpInfo: 'Contact if you have some issues',
        name: 'Max Kiselyov',
    });
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Cloudy',
        location: 'Bebravill',
        name: 'Max Kiselyov'
    });
})

app.listen(3000, () => {
    console.log('Starting server on port 3000');
});
