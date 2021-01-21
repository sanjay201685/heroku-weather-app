const path = require('path');
const express = require('express');
const request = require('postman-request');
const contactus = require('./contact_us');


const aap = express();
const dirPath = path.join(__dirname, '../public');
aap.use(express.static(dirPath));

// aap.get('', (req, res) => {
//     res.send('Home page');
// });

// aap.get('/help', (req, res) => {
//     const url = 'http://api.weatherstack.com/current?access_key=1abe4b86f645bb3e56aa8091dd1363b8&query=New York&forecast_days=1&hourly=1&units=s';
//     let weather = '';
//     request({url: url, json: true}, (error, response) => {
//         if (error) {
//             res.send('Unable to connect.');
//         } else if (response.body.error) {
//             res.send('unable to get forcast');
//         } else {
//             weather = 'Forcast ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.precip + '% chanse of rain.';
//             // res.send(response.body);
//             res.send(weather);
//         }
//     });
// });

// const para = process.argv[2];
// aap.get('/contact-us', (req, res) => {
//     let contactData = '';
//     contactus(para, (error, res) => {
//         contactData = res;
//     });
//     res.send('Contact us -> ' + contactData);
// });


aap.listen(3000, () => {
    console.log('Express server up and running.');
});