const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=53ff9542bed076d30dc2fdbfb1b43354&query=' + latitude + ',' + longitude + '&units=m';
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            // console.log('API response:', body); 
            const data = body;
            callback(undefined, {
                weather_descriptions: data.current.weather_descriptions,
                temperature: data.current.temperature,
                feelslike: data.current.feelslike
            });
        }
    });
}

module.exports = forecast;