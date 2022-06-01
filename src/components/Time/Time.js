import React, { useState, useEffect } from "react";
import "./Time.css";
const Time = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [greet, setGreet] = useState("");
  const dayPicker = (num) => {
    switch (num) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "";
    }
  };
  const monthPicker = (num) => {
    switch (num) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return "";
    }
  };
  const todayDate = () => {
    const today = new Date();
    return (
      monthPicker(today.getMonth()) +
      "  " +
      today.getDate() +
      ",  " +
      today.getFullYear()
    );
  };
  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      setCurrentTime(
        dayPicker(time.getDay()) +
          " " +
          ("0" + time.getHours()).slice(-2) +
          ":" +
          ("0" + time.getMinutes()).slice(-2)
      );
      let hour = time.getHours();
      if (hour >= 0 && hour <= 3) {
        setGreet("Night");
      } else if (hour > 3 && hour < 12) {
        setGreet("Morning");
      } else if (hour >= 12 && hour <= 17) {
        setGreet("Afternoon");
      } else {
        setGreet("Evening");
      }
    }, 1000);
  }, []);
  return (
    <div className="time">
      <div className="timeContainer">
        <p className="time-item1">{currentTime}</p>
        <p className="time-item2">{todayDate()}</p>
        <div className="time-item3">Good {greet}</div>
      </div>
    </div>
  );
};

export default Time;
