import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeView } from "../store/uiSlice";

const getDeviceType = () => {
  const userAgent = navigator.userAgent.toLocaleLowerCase();
  const width = window.innerWidth;

  let device = "desktop";
  if (/mobile|android|iphone|ipod/.test(userAgent)) {
    device = "mobile";
  } else if (/tablet|ipad/.test(userAgent) || (width >= 600 && width <= 1024)) {
    device = "tablet";
  }

  return device;
};

const useDeviceType = () => {
  const [device, setDevice] = useState(getDeviceType());
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
        setDevice(getDeviceType());

        if(getDeviceType() !== "desktop"){
          dispatch(changeView("card"));
        }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return device;
};

export default useDeviceType;
