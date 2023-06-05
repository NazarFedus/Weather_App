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
      </MainLayout>

  );
};

export default WeatherView;
