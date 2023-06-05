import axios from "axios";

export const getWeather = async (location) => {
     // const apiKey = process.env.OPEN_WEATHER_API_KEY;
     const apiKey = '0620345502be8b85a2fc7c9553b68cac'
     console.log(apiKey)
     const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

     try {
          const response = await axios.get(apiURL);
          const weatherData = response.data;
          console.log(weatherData);
     } catch (error) {
          console.log(error)
     }
}