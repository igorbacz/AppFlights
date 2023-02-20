import React from 'react'
import { JsxElement } from 'typescript';
import Flights from "../../components/Flights";
import { SearchBar } from "../../components/SearchBar/SearchBar";

type Props = {
  at: any;
  children: any;
};

export const Main = () => {
  const currentScreenWidth = window.screen.width;
  //@ts-ignore
  let currentDevice = "";
  const flights = () => {
    if (currentScreenWidth <= 375) {
      return (currentDevice = "mobile");
    } else if (currentScreenWidth < 375 && currentScreenWidth > 768) {
      return (currentDevice = "tablet");
    } else if (currentScreenWidth >= 768 && currentScreenWidth > 1024) {
      currentDevice = "desktop";
    }
    return (currentDevice = "tablet");
  };
  console.log(flights);

  return <div></div>;
};
