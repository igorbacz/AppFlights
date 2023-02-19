import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { flight } from "../../../types";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import {
  Line,
  StyledFontLittle,
  StyledFontLight,
  ButtonBox,
} from "../FlightDesktopTemplate/styles";
import {  StyledLogoTablet, StyledFontMediumTablet, StyledBoldBigTablet, DetailsBoxTablet, FromBoxLeftBottomTablet, HourBoxLeftBottomTablet, DayBoxLeftBottomTablet, DurationBottomBoxTablet, LineBoxBottomTablet, FromBoxRightBottomTablet, HourBoxRightBottomTablet, DayBoxRightBottomTablet,  PriceTextTablet, StyledButtonTablet } from "../FlightTabletTemplate/styles";
import { BorderBoxMobile, DayBoxLeftBottomMobile, DayBoxLeftTopMobile, DayBoxRightBottomMobile, DayBoxRightTopMobile, DetailsBoxMobile, DurationBottomBoxMobile, DurationTopBoxMobile, FromBoxLeftBottomMobile, FromBoxLeftTopMobile, FromBoxRightBottomMobile, FromBoxRightTopMobile, HourBoxLeftBottomMobile, HourBoxLeftTopMobile, HourBoxRightBottomMobile, HourBoxRightTopMobile, LineBoxBottomMobile, LineBoxTopMobile, LogoBoxBottomMobile, LogoBoxTopMobile, MobileContainer, PriceBoxMobile } from "./style";

export const FlightMobileTemplate = () => {
  return (
    <MobileContainer>
      <LogoBoxTopMobile>
        <StyledLogoTablet src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${flight.airlineCode}.png`} />
      </LogoBoxTopMobile>

      <FromBoxLeftTopMobile>
        <StyledFontMediumTablet>{flight.bounds[0].departure.code}</StyledFontMediumTablet>
      </FromBoxLeftTopMobile>
      <HourBoxLeftTopMobile>
        <StyledBoldBigTablet>20:35</StyledBoldBigTablet>
      </HourBoxLeftTopMobile>
      <DayBoxLeftTopMobile>
        <StyledFontMediumTablet>vri 04 feb</StyledFontMediumTablet>
      </DayBoxLeftTopMobile>

      <DurationTopBoxMobile>
        <StyledFontMediumTablet>2u 55m</StyledFontMediumTablet>
      </DurationTopBoxMobile>

      <LineBoxTopMobile>
        <FontAwesomeIcon icon={faCircle} color="#FCC002" />
        <Line></Line>
        <FontAwesomeIcon icon={faCircle} color="#FCC002" />
      </LineBoxTopMobile>

      <FromBoxRightTopMobile>
        <StyledFontMediumTablet>{flight.bounds[0].destination.code}</StyledFontMediumTablet>
      </FromBoxRightTopMobile>
      <HourBoxRightTopMobile>
        <StyledBoldBigTablet>22:30</StyledBoldBigTablet>
      </HourBoxRightTopMobile>
      <DayBoxRightTopMobile>
        <StyledFontMediumTablet>vri 04 feb</StyledFontMediumTablet>
      </DayBoxRightTopMobile>

      <DetailsBoxMobile>
        <StyledFontLittle>Vluchtdetails</StyledFontLittle>
      </DetailsBoxMobile>

      <BorderBoxMobile />

      <LogoBoxBottomMobile>
        <StyledLogoTablet src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${flight.airlineCode}.png`} />
      </LogoBoxBottomMobile>

      <FromBoxLeftBottomMobile>
        <StyledFontMediumTablet>{flight.bounds[1].departure.code}</StyledFontMediumTablet>
      </FromBoxLeftBottomMobile>
      <HourBoxLeftBottomMobile>
        <StyledBoldBigTablet>20:35</StyledBoldBigTablet>
      </HourBoxLeftBottomMobile>
      <DayBoxLeftBottomMobile>
        <StyledFontMediumTablet>vri 04 feb</StyledFontMediumTablet>
      </DayBoxLeftBottomMobile>

      <DurationBottomBoxMobile>
        <StyledFontMediumTablet>2u 55m</StyledFontMediumTablet>
      </DurationBottomBoxMobile>

      <LineBoxBottomMobile>
        <FontAwesomeIcon icon={faCircle} color="#FCC002" />
        <Line></Line>
        <FontAwesomeIcon icon={faCircle} color="#FCC002" />
      </LineBoxBottomMobile>

      <FromBoxRightBottomMobile>
        <StyledFontMediumTablet>{flight.bounds[1].destination.code}</StyledFontMediumTablet>
      </FromBoxRightBottomMobile>
      <HourBoxRightBottomMobile>
        <StyledBoldBigTablet>22:30</StyledBoldBigTablet>
      </HourBoxRightBottomMobile>
      <DayBoxRightBottomMobile>
        <StyledFontMediumTablet>vri 04 feb</StyledFontMediumTablet>
      </DayBoxRightBottomMobile>

      {/* <PriceContainer /> */}
      {/* <TriangleBoxTablet>
        <Triangle />
      </TriangleBoxTablet> */}
      <PriceBoxMobile>
        <PriceTextTablet>
          <StyledBoldBigTablet>€</StyledBoldBigTablet>
          <StyledBoldBigTablet>{flight.price.amount}</StyledBoldBigTablet>
          <StyledFontLight>p.p.</StyledFontLight>
        </PriceTextTablet>
        <ButtonBox>
          <StyledButtonTablet>Book flight</StyledButtonTablet>
        </ButtonBox>
      </PriceBoxMobile>
    </MobileContainer>
  );
};
