import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonBox, StyledBoldBig, StyledButton, StyledFontLight, StyledFontMedium } from "../Flight/styles";
import { ViewContainer } from "../Flights/styles";
import { ConfirmationBox, ConfirmTextBox } from "./style";

export const Confirmation = () => {
  return (
    <ViewContainer>
      <ConfirmationBox>
        <ConfirmTextBox>
          <FontAwesomeIcon icon={faPlaneDeparture} size="3x" color="#FCC002" />
          <StyledFontLight>Congratulations! Your flight booking is confirmed.</StyledFontLight>
        </ConfirmTextBox>
        <ButtonBox>
          <Link to="/flights">
            <StyledButton>Flyithts list</StyledButton>
          </Link>
        </ButtonBox>
      </ConfirmationBox>
    </ViewContainer>
  );
};
