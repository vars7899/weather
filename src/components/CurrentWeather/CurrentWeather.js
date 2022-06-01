import React from "react";
import { convertTimestamp } from "../../functions/createDate";
import "./CurrentWeather.css";
const CurrentWeather = ({ obj, area }) => {
  return (
    <div className="current">
      <div
        className="current-top"
        style={{ backgroundImage: "url(/img/sunnybig.png)" }}
      >
        <div className="current-header">
          <i className="fas fa-globe-asia"></i>
          {/* <p>{area.split("/")[1]}</p> */}
          <p>{area}</p>
        </div>
        <div className="current-time">
          {convertTimestamp(obj.dt).slice(0, 16)}
        </div>
        <div className="current-type">{obj?.weather[0].main}</div>
        <div className="current-temp"> {obj.temp} K</div>
      </div>
      <div className="current-info">
        <div className="info">
          <div className="details">
            <p>Feels Like</p>
            <p>{obj.feels_like}</p>
          </div>
          <div className="details">
            <p> Clouds</p>
            <p> {obj.clouds} %</p>
          </div>
          <div className="details">
            <p>Humidity</p>
            <p>{obj.humidity} %</p>
          </div>
          <div className="details">
            <p> Pressure</p>
            <p> {obj.pressure} hPa</p>
          </div>
        </div>
        <div className="info">
          <div className="details">
            <p>UV Index</p>
            <p>{obj.uvi}</p>
          </div>
          <div className="details">
            <p>Visibility</p>
            <p>{obj.visibility} m</p>
          </div>
          <div className="details">
            <p>Wind Deg</p>
            <p>{obj.wind_deg}°</p>
          </div>
          <div className="details">
            <p>Wind Speed</p>
            <p>{obj.wind_speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
