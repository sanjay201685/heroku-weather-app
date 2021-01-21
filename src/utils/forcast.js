const request = require('postman-request');

const forcast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1abe4b86f645bb3e56aa8091dd1363b8&query=' + lat + ',' + long + '&units=s';

    request({url: url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect.', undefined);
        } else if (body.error) {
            callback('unable to get forcast', undefined);
        } else {
            callback(undefined, 'Forcast ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chanse of rain.');
        }
    })
}

module.exports = forcast;