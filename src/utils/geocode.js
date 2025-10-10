const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.maptiler.com/geocoding/' + encodeURIComponent(address) + '.json?key=5LqpIHQIKucNzY3Sbq7R&limit=1';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            const data = body;
            const latitude = data.features[0].center[1];
            const longitude = data.features[0].center[0];
            const location = data.features[0].place_name;
            callback(undefined, {
                latitude: latitude,
                longitude: longitude,
                location: location
            });
        }
    });
}

module.exports = geocode;