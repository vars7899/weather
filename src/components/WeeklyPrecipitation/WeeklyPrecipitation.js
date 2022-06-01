import React from "react";
import "./WeeklyPrecipitation.css";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";
const WeeklyPrecipitation = ({ Cdata }) => {
  return (
    <div className="pop">
      <div className="pop1">Weekly precipitation</div>
      <div className="pop2">
        <XYPlot width={300} height={230} stackBy="y">
          <VerticalGridLines />
          <HorizontalGridLines />
          <VerticalBarSeries
            data={Cdata.uviArr}
            color={"#ff8811"}
            style={{ width: "10px" }}
          />
          <VerticalBarSeries
            data={Cdata.popArr}
            color={"#ffffff"}
            style={{ width: "10px" }}
          />
        </XYPlot>
      </div>
      <div className="pop3">
        <div className="pop30">
          <i className="fas fa-square" style={{ color: "#ff8811" }}></i>
          <p>UVI</p>
        </div>
        <div className="pop31">
          <i className="fas fa-square" style={{ color: "#ffffff" }}></i>
          <p>Precipitation</p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyPrecipitation;
