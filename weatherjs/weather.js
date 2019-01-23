class Weather {
    constructor(zip) {
        this.apiKey = '17a4f36c3c993dbbe2281647faabad87';
        this.zip = 60608;
    }

    //fetch weather from api
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.zip},us&APPID=${this.apiKey}.json`)
        const responseData = await response.json();

        return responseData.zip;
    }
    //change location
    changeLocaton(zip) {
        this.zip = zip;
    }
}