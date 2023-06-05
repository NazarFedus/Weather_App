import React, { FC } from "react";
import NextHead from "next/head";
import { MainLayout } from "../MainLayout";

const WeatherView: FC<any> = ({ weather }) => {
  console.log(weather);

  return (

    <MainLayout title={'Weather Forecast'}>
      <NextHead>
        <title> Weather Page </title>
        <meta name="description" content="This is Weather Forecast" />
      </NextHead>
      <div>
          <h4>{weather?.name}</h4>

          <div>
               <p>Temperature: <span>{weather?.main?.temp}</span></p>
               <p>Pressure: <span>{weather?.main?.pressure}</span></p>
               <p>Visibility: <span>{weather?.visibility}</span></p>
               <p>Wind Speed: <span>{weather?.wind?.speed}</span></p>
          </div>
      </div>
      </MainLayout>

  );
};

export default WeatherView;
