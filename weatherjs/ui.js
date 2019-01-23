class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
        
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[1];
        this.string.textContent = weather.main.temp;
        this.details.textContent = weather.weather.description;
        this.icon.setAttribute('src', weather.weather.icon);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.dewpoint.textContent = `Dewpoint Pressure: ${weather.main.pressure}`;
        this.wind.textContent = `Wind Speed ${weather.wind.speed}`;

    }
}