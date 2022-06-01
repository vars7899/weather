import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import useLocation from "../../Hooks/useLocation";
import "./AirQualityIndex.css";

const AirQualityIndex = () => {
  // grab location from the custom hook
  const location = useLocation();

  // states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [airData, setAirData] = useState("");

  const WEATHER_URL_API_KEY = "e4d20fa39c41b05005a81bd12f180456";

  // fetch weather data

  useEffect(() => {
    if (location.success) {
      // fetch weather data
      const fetchWeatherData = async () => {
        try {
          const WEATHER_URL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&appid=${WEATHER_URL_API_KEY}`;

          const res = await fetch(WEATHER_URL);
          const data = await res.json();
          await setLoading(false);
          await setAirData(data);
        } catch (error) {
          setError(error);
        }
      };
      fetchWeatherData();
    } else {
      setLoading(false);
    }
  }, [location]);

  const aqiComment = (num) => {
    switch (num) {
      case 1:
        return {
          type: "Good",
          desc: "A perfect day to have a walk",
          icon: "fas fa-wind",
          color: "#008F15",
          bg: "#D6FFDC",
        };
      case 2:
        return {
          type: "Fair",
          desc: "May cause minor breathing discomfort",
          icon: "fas fa-lungs",
          color: "008F15",
          bg: "#F0FFD6",
        };
      case 3:
        return {
          type: "Moderate",
          desc: "May cause breathing discomfort",
          icon: "fas fa-smog",
          color: "#8F6B00",
          bg: "#8F6B00",
        };
      case 4:
        return {
          type: "Poor",
          desc: "Unhealthy for sensitive groups, Heavy Contaminates",
          icon: "fas fa-exclamation-triangle",
          color: "#8F6B00",
          bg: "#8F6B00",
        };
      case 5:
        return {
          type: "Hazardous",
          desc: "Stay home, Extremely high contaminates",
          icon: "fas fa-skull-crossbones",
          color: "#8F6B00",
          bg: "#8F6B00",
        };
      default:
        return {
          type: "",
          desc: "",
          icon: "",
          color: "",
          bg: "",
        };
    }
  };
  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <Message>{error}</Message>;
  } else {
    return (
      <div className="air">
        <div className="air0">
          <p>Air Quality Index</p>
        </div>

        {airData && airData.list[0] && (
          <div className="air2">
            <div className="air20">
              <p>{airData.list[0].components.co}</p>
              <p>CO</p>
            </div>
            <div className="air21">
              <p>{airData.list[0].components.nh3}</p>
              <p>NH3</p>
            </div>
            <div className="air22">
              <p>{airData.list[0].components.no}</p>
              <p>NO</p>
            </div>
            <div className="air23">
              <p>{airData.list[0].components.no2}</p>
              <p>NO2</p>
            </div>
            <div className="air24">
              <p>{airData.list[0].components.o3}</p>
              <p>O3</p>
            </div>
            <div className="air25">
              <p>{airData.list[0].components.pm2_5}</p>
              <p>PM 2.5</p>
            </div>
            <div className="air26">
              <p>{airData.list[0].components.pm10}</p>
              <p>PM 10</p>
            </div>
            <div className="air27">
              <p>{airData.list[0].components.so2}</p>
              <p>SO2</p>
            </div>
          </div>
        )}
        {airData && airData.list[0] && (
          <div className="air1">
            <div className="air10">
              <i
                className={aqiComment(airData.list[0].main.aqi).icon}
                style={{ color: aqiComment(airData.list[0].main.aqi).color }}
              ></i>
            </div>
            <div className="air11">
              <div
                className="air110"
                style={{ color: aqiComment(airData.list[0].main.aqi).color }}
              >
                {aqiComment(airData.list[0].main.aqi).type}
              </div>
              <div className="air111">
                {aqiComment(airData.list[0].main.aqi).desc}
              </div>
            </div>
            <div className="air12"></div>
          </div>
        )}
      </div>
    );
  }
};

export default AirQualityIndex;
