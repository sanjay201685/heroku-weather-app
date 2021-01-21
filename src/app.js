const path = require('path');
const express = require('express');
const request = require('postman-request');
const hbs = require('hbs');
const contactus = require('./contact_us');
const mapbox = require('./utils/geocode');
const forcast = require('./utils/forcast');
const aap = express();
const port = process.env.PORT || 3000;

// Define path for express config.
const dirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup halders engine and views location. 
aap.set('view engine', 'hbs');
aap.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve.
aap.use(express.static(dirPath));

aap.get('', (req, res) => {
    res.render('index', {
        title: 'index hbs',
        name : 'Sanjay'
    });
});

aap.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page'
    })
})

aap.get('/weather', (req, res) => {
    if (!req.query.city) {
        res.send({error: 'Please add city in query string'});
    }
    if (req.query.city) {
        mapbox(req.query.city, (error, {latitude, longitude} = {}) => {
            if (error) {
                return res.send({error: error});
            }
            forcast(latitude, longitude, (error, forecast) => {
                if (error) {
                    return res.send({error: error});
                }
                res.send({
                    forecast: forecast,
                    address: req.query.city
                });
            });
        });
    }
});

aap.get('/weather1', (req, res) => {
    // console.log(req);
});

aap.get('/weather/*', (req, res) => {
    res.send('Weather page not found.');
});

aap.get('*', (req, res) => {
    res.send('Page not found 404');
});

aap.listen(port, () => {
    console.log('Express server up and running on port ' + port);
});