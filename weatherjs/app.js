//Init storage
const storage = new Storage();
//get stored location data
const weatherLocation = storage.getLocationData();

// Init weather obj
const weather = new Weather(weatherLocation.zip);

// Init UI
const ui = new UI;




//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn'),addEventListener('click', (e) => {
    const city = document.getElementById('zip').value;

    weather.changeLocaton(zip);

    storage.setLocationData(zip);

   getWeather();

   $('#locModal').modal('hide'); 
});

//get weather
function getWeather() {
weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}