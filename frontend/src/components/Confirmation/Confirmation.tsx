import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonBox, StyledBoldBig, StyledButton } from "../Flight/styles";
import { FlightsContainer } from "../Flights/styles";
import { ConfirmationBox, ConfirmTextBox } from "./style";

export const Confirmation = () => {
  return (
    <FlightsContainer>
      <ConfirmationBox>
        <ConfirmTextBox>
          <FontAwesomeIcon icon={faPlaneDeparture} size="3x" color="#FCC002" />
          <StyledBoldBig>Congratulations! Your flight booking is confirmed.</StyledBoldBig>
        </ConfirmTextBox>
        <ButtonBox>
          <Link to="/flights">
            <StyledButton>Flyithts list</StyledButton>
          </Link>
        </ButtonBox>
      </ConfirmationBox>
    </FlightsContainer>
  );
};
