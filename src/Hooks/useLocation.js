import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {
      lat: "",
      lng: "",
    },
  });

  //   if the user accept to share the location with the app
  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      success: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };
  // if the user deny to share the location
  const onError = (error) => {
    setLocation({
      loaded: true,
      success: false,
      message: error,
    });
  };
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Location available");
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      onError({ code: 0, message: "ERROR: Geolocation not supported" });
    }
  }, []);
  return location;
};

export default useLocation;
