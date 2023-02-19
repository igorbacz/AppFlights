import React from "react";
import styled from "styled-components";
import {  FlightDesktopTemplate } from "../Flight/FlightDesktopTemplate/FlightDesktopTemplate";
import { FlightMobileTemplate } from "../Flight/FlightMobileTemplate/FlightMobileTemplate";
import { FlightTabletTemplate } from "../Flight/FlightTabletTemplate/FlightTabletTemplate";

export const FlightsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:40px;
  padding-top: 20px;
`;

const Flights = () => {
  return (
    <FlightsContainer>
      <div>Search Bar view //TODO</div>
      <div>Desktop view //TODO</div>
      <FlightDesktopTemplate />
      <FlightTabletTemplate />
      <FlightMobileTemplate />
    </FlightsContainer>
  );
};

export default Flights;
