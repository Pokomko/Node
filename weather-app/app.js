const geocode = require('./utils/geocode')
const weather = require('./utils/weatherstack')

const address = process.argv[2];

if (!address) {
    console.log('Please provide address')
} else {
    geocode(address, (error, { latitude, longtitude, location } = {}) => {
        if (error) {
            return console.log(error)
        }
    
        weather(latitude, longtitude, (error, weatherdata) => {
            if (error) {
                return console.log(error)
            }
            console.log(location);
            console.log(weatherdata);
        });
    })
}

