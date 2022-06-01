import React from "react";
import "./Forecast.css";
import { convertTimestamp } from "../../functions/createDate";
const Forecast = ({ arr }) => {
  return (
    <div className="forecast">
      <div className="forecast__tray">
        {arr.map((item, index) => (
          <div key={index} className="card">
            <p className="day">{convertTimestamp(item.dt).slice(0, 3)}</p>
            <img src={`./img/${item.weather[0].icon}.png`} alt="" />
            <div className="maxmin">
              <p className="max">{item.temp.max}</p>
              <p className="min">{item.temp.min}</p>
            </div>
            <p className="desc">{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
