import React, { Dispatch, SetStateAction, useState } from "react";
import { Details } from "../../types";
import { StyledCloseButton, StyledTable, StyledTd } from "./styles";

type Props = {
  currentFlightDetails: Details | undefined;
  closeDetails: Dispatch<SetStateAction<boolean>>;
};

export const TableDetails = ({ currentFlightDetails, closeDetails }: Props) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };
  return (
    <>
      <StyledCloseButton onClick={() => closeDetails(false)}>close details</StyledCloseButton>
      <StyledTable>
        <tbody>
          {!currentFlightDetails?.remainingNumberOfSeats ? null : (
            <tr>
              <StyledTd>Remaining number of seats:</StyledTd>
              <StyledTd>{currentFlightDetails?.remainingNumberOfSeats} </StyledTd>
            </tr>
          )}
          {!currentFlightDetails?.seatPitch ? null : (
            <tr>
              <StyledTd>Seat Pitch:</StyledTd>
              <StyledTd>{currentFlightDetails?.seatPitch} </StyledTd>
            </tr>
          )}
          {!currentFlightDetails?.freeBaggageAllowed ? null : (
            <tr>
              <StyledTd>Is free Baggage Allowed:</StyledTd>
              <StyledTd>{currentFlightDetails?.freeBaggageAllowed ? "YES" : "NO"} </StyledTd>
            </tr>
          )}
          {!currentFlightDetails?.cabinClass ? null : (
            <tr>
              <StyledTd>Cabin Class:</StyledTd>
              <StyledTd>{currentFlightDetails?.cabinClass} </StyledTd>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </>
  );
};
