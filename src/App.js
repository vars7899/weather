import React, { useState, useEffect } from "react";
import "./App.css";
// component imports
import Spinner from "./components/Spinner/Spinner";
import Message from "./components/Message/Message";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Time from "./components/Time/Time";
import Forecast from "./components/Forecast/Forecast";
import useLocation from "./Hooks/useLocation";
import AirQualityIndex from "./components/AirQualityIndex/AirQualityIndex";
import WeeklyPrecipitation from "./components/WeeklyPrecipitation/WeeklyPrecipitation";
import { convertTimestamp } from "./functions/createDate";
import RiseAndSet from "./components/RiseAndSet/RiseAndSet";
const App = () => {
  // grab location from the custom hook
  const location = useLocation();

  // states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState("");

  const WEATHER_URL_API_KEY = "e4d20fa39c41b05005a81bd12f180456";

  // fetch weather data

  useEffect(() => {
    if (location.success) {
      // fetch weather data
      const fetchWeatherData = async () => {
        try {
          const WEATHER_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&exclude={part}&units={metric}&appid=${WEATHER_URL_API_KEY}`;

          const res = await fetch(WEATHER_URL);
          const data = await res.json();
          await setLoading(false);
          await setWeatherData(data);
        } catch (error) {
          setError(error);
          console.log(error);
        }
      };
      fetchWeatherData();
    } else {
      setLoading(false);
    }
  }, [location]);
  // grab data for charts
  const popData = () => {
    let popArr = [];
    let uviArr = [];
    let count = 0;
    if (weatherData.daily) {
      for (let item of weatherData.daily) {
        popArr.push({ x: count, y: item.pop });
        uviArr.push({ x: count, y: item.uvi });
        count++;
      }
    }
    return { popArr, uviArr };
  };

  // grab data for rise and set
  const riseAndSetData = () => {
    let Arr = [];
    if (weatherData.daily) {
      for (let item of weatherData.daily) {
        Arr.push({
          rise: convertTimestamp(item.sunrise),
          set: convertTimestamp(item.sunset),
        });
      }
    }
    return Arr;
  };
  console.log(weatherData);
  riseAndSetData();
  return (
    <div className="app">
      <div className="app__right">
        {console.log(weatherData)}
        {weatherData && weatherData.current && (
          <CurrentWeather
            obj={weatherData.current}
            area={weatherData.timezone}
          />
        )}
        {/* {weatherData && weatherData.alerts && (
          <Alert data={weatherData.alerts} />
        )} */}
      </div>
      <div className="app__left">
        <div className="time-section">
          <Time />
        </div>
        <div className="air-section">
          {weatherData && weatherData.timezone && (
            <AirQualityIndex city={weatherData.timezone} />
          )}
        </div>
        <div className="forecast-section">
          {loading ? (
            <Spinner />
          ) : error ? (
            <Message>{error}</Message>
          ) : weatherData.daily ? (
            <Forecast arr={weatherData.daily} />
          ) : (
            <Spinner />
          )}
        </div>

        <div className="pre-section">
          {weatherData && <WeeklyPrecipitation Cdata={popData()} />}
        </div>
        <div className="sun-section">
          <RiseAndSet data={riseAndSetData()} />
        </div>
      </div>
    </div>
  );
};

export default App;
