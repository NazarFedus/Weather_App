import React, { FC } from "react";
import NextHead from "next/head";

const WeatherView: FC<any> = ({ weather }) => {
  console.log(weather);

  return (
    <>
      <NextHead>
        <title> Weather Page </title>
        <meta name="description" content="This is Weather Forecast" />
      </NextHead>
    </>
  );
};

export default WeatherView;
