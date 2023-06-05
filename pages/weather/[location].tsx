import React, { FC } from "react";
import WeatherView from '../../components/views/WeatherView'
import axios from "axios";

interface WeatherProps {
  weather: any;
}

const Weather: FC<WeatherProps> = ({ weather }) => (
  <WeatherView weather={weather} />
);

export default Weather;

export const getServerSideProps = async ({ params }) => {
  const location = params.location || "LONDON";
  const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

  try {
    const response = await axios.get(apiURL);
    const weatherData = response.data;
    return {
      props: {
        weather: weatherData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        weather: null,
      },
    };
  }
};
