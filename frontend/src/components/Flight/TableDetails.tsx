import { Dispatch, SetStateAction, useState } from "react";
import { Details } from "../../types/types";
import { StyledCloseButton, StyledTable, StyledTd } from "./styles";

type Props = {
  currentFlightDetails: Details | undefined;
  closeDetails: Dispatch<SetStateAction<boolean>>;
};

export const TableDetails = ({ currentFlightDetails, closeDetails }: Props): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  const showModal = (): void => {
    setShow(true);
  };
  return (
    <>
      <StyledCloseButton onClick={() => closeDetails(false)}>close details</StyledCloseButton>
      <StyledTable>
        <tbody>
          {currentFlightDetails?.remainingNumberOfSeats && (
            <tr>
              <StyledTd>Remaining number of seats:</StyledTd>
              <StyledTd>{currentFlightDetails?.remainingNumberOfSeats} </StyledTd>
            </tr>
          )}
          {currentFlightDetails?.seatPitch && (
            <tr>
              <StyledTd>Seat Pitch:</StyledTd>
              <StyledTd>{currentFlightDetails?.seatPitch} </StyledTd>
            </tr>
          )}
          {currentFlightDetails?.freeBaggageAllowed && (
            <tr>
              <StyledTd>Is free Baggage Allowed:</StyledTd>
              <StyledTd>{currentFlightDetails?.freeBaggageAllowed ? "YES" : "NO"} </StyledTd>
            </tr>
          )}
          {currentFlightDetails?.cabinClass && (
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
