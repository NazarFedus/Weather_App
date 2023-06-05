export interface IParams {
     location: string
}

export interface WeatherProps {
     weather: WeatherData;
}

export interface WeatherData {
     coord: TCoord,
     weather: {
       id: number;
       main: string;
       description: string;
       icon: string;
     }[];
     base: string;
     main: TMainWeather;
     visibility: number;
     wind: TWind;
     clouds: {
       all: number;
     };
     dt: number;
     sys: {
       country: string;
       sunrise: number;
       sunset: number;
     };
     timezone: number;
     id: number;
     name: string;
     cod: number;
   }

type TCoord = Record<'lon' | 'lat', number>;
type TMainWeather = Record<'temp' | 'feels_like' | 'temp_min' | 'temp_max' | 'pressure' | 'humidity' | 'sea_level' | 'grnd_level', number>
type TWind = Record<'speed' | 'deg' | 'gust', number>