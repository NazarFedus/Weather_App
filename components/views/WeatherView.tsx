import React, { FC } from "react";
import NextHead from "next/head";
import { MainLayout } from "../MainLayout";

const WeatherView: FC<any> = ({ weather }) => {
  console.log(weather);

  return (
    <MainLayout title={"Weather Forecast"}>
      <NextHead>
        <title> Weather Page </title>
        <meta name="description" content="This is Weather Forecast" />
      </NextHead>
      <div>
        <div className="flex items-center">
          <h4 className="text-5xl p-10">{weather?.name}</h4>
          <img src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`} alt="weather-icon" className="w-[100px] h-[100px]"/>
        </div>
        <div className="ml-[40px]">
          <p>
            Temperature: <span>{weather?.main?.temp}</span>
          </p>
          <p>
            Pressure: <span>{weather?.main?.pressure}</span>
          </p>
          <p>
            Visibility: <span>{weather?.visibility}</span>
          </p>
          <p>
            Wind Speed: <span>{weather?.wind?.speed}</span>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default WeatherView;
