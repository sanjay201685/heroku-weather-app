const request = require('postman-request');

const mapbox = (city_name, callback) => {
    
    if (city_name === undefined) {
        callback('Please provide city name', undefined);
    } else {
        //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2t5Y3JlYXRyaXgiLCJhIjoiY2tqdG1pdXg4MDB0YzJyb2JlOG1neTBpdSJ9.e0jg4zRR5EpVa5jnz5mVHg';
        const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + city_name +'.json?access_token=pk.eyJ1Ijoic2t5Y3JlYXRyaXgiLCJhIjoiY2tqdG1pdXg4MDB0YzJyb2JlOG1neTBpdSJ9.e0jg4zRR5EpVa5jnz5mVHg';
        request({url: url, json: true}, (error, response) => {
            if (error) {
                callback('Unable to connect', undefined);
            } else if (response.body.features.length === 0) {
                callback('unable to get forcast', undefined);
            } else {
                callback(undefined, {
                    latitude: response.body.features[0].center[0],
                    longitude: response.body.features[0].center[1]
                });
            }
        });
    }
    
}

module.exports = mapbox