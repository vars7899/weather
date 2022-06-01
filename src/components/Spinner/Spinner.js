import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Spinner = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#0d0f1c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        position: "absolute",
        top: 0,
        left: 0,
        transition: "200 ease",
      }}
    >
      <Loader type="BallTriangle" color="#fff" height={80} width={80} />
    </div>
  );
};

export default Spinner;
