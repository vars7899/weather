import React from "react";
import "./RiseAndSet.css";
const RiseAndSet = ({ data }) => {
  return (
    <div className="sun">
      <div className="sun__heading">Sunrise & Sunset</div>
      <div className="sun__list">
        {data.map((item, index) => (
          <div key={index} className="sun__card">
            <div className="sun__card__date">{item.rise.slice(0, 11)}</div>
            <div className="sun__details">
              <div className="sun__details__rise">
                <div className="sun__details__rise__time">
                  <p>Sunrise</p>
                  <p className="timing">{item.rise.slice("-11", "-4")}</p>
                </div>
              </div>
              <div className="sun__details__set">
                <div className="sun__details__set__time">
                  <p>Sunset</p>
                  <p className="timing">{item.set.slice("-11", "-4")}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiseAndSet;
