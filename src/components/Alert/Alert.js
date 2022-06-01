import React from "react";
import "./Alert.css";
const Alert = ({ data }) => {
  return (
    <div className="alert">
      {data.map((item, index) => (
        <div key={index} className="event">
          <p className="event1">
            <i className="fas fa-exclamation-triangle"></i> {item.sender_name}
          </p>
          <p className="event2">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Alert;
