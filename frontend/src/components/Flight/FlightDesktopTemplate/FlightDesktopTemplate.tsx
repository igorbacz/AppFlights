import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import { flight } from '../../../types';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { DesktopContainer, LogoBoxTop, StyledLogo, FromBoxLeftTop, StyledFontMedium, HourBoxLeftTop, StyledBoldBig, DayBoxLeftTop, LineBoxTop, Line, FromBoxRightTop, HourBoxRightTop, DayBoxRightTop, DetailsBox, StyledFontLittle, BorderBox, LogoBoxBottom, FromBoxLeftBottom, HourBoxLeftBottom, DayBoxLeftBottom, LineBoxBottom, FromBoxRightBottom, HourBoxRightBottom, DayBoxRightBottom, PriceContainerDesktop, TriangleBox, Triangle, PriceBox, PriceText, StyledFontLight, ButtonBox, StyledButton, DurationBottomBox, DurationTopBox } from './styles';




const aa = "aa";
export const FlightDesktopTemplate = () => {
  return (
    <DesktopContainer>
      <LogoBoxTop>
        <StyledLogo src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${flight.airlineCode}.png`} />
      </LogoBoxTop>

      <FromBoxLeftTop>
        <StyledFontMedium>{flight.bounds[0].departure.code}</StyledFontMedium>
      </FromBoxLeftTop>
      <HourBoxLeftTop>
        <StyledBoldBig>20:35</StyledBoldBig>
      </HourBoxLeftTop>
      <DayBoxLeftTop>
        <StyledFontMedium>vri 04 feb</StyledFontMedium>
      </DayBoxLeftTop>

      <DurationTopBox>
        <StyledFontMedium>2u 55m</StyledFontMedium>
      </DurationTopBox>

      <LineBoxTop>
        <FontAwesomeIcon icon={faCircle} color="#FCC002" />
        <Line></Line>
        <FontAwesomeIcon icon={faCircle} color="#FCC002" />
      </LineBoxTop>

      <FromBoxRightTop>
        <StyledFontMedium>{flight.bounds[0].destination.code}</StyledFontMedium>
      </FromBoxRightTop>
      <HourBoxRightTop>
        <StyledBoldBig>22:30</StyledBoldBig>
      </HourBoxRightTop>
      <DayBoxRightTop>
        <StyledFontMedium>vri 04 feb</StyledFontMedium>
      </DayBoxRightTop>

      <DetailsBox>
        <StyledFontLittle>Vluchtdetails</StyledFontLittle>
      </DetailsBox>

      <BorderBox />

      <LogoBoxBottom>
        <StyledLogo src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${flight.airlineCode}.png`} />
      </LogoBoxBottom>

      <FromBoxLeftBottom>
        <StyledFontMedium>{flight.bounds[1].departure.code}</StyledFontMedium>
      </FromBoxLeftBottom>
      <HourBoxLeftBottom>
        <StyledBoldBig>20:35</StyledBoldBig>
      </HourBoxLeftBottom>
      <DayBoxLeftBottom>
        <StyledFontMedium>vri 04 feb</StyledFontMedium>
      </DayBoxLeftBottom>

      <DurationBottomBox>
        <StyledFontMedium>2u 55m</StyledFontMedium>
      </DurationBottomBox>

      <LineBoxBottom>
        <FontAwesomeIcon icon={faCircle} color="#FCC002" />
        <Line></Line>
        <FontAwesomeIcon icon={faCircle} color="#FCC002" />
      </LineBoxBottom>

      <FromBoxRightBottom>
        <StyledFontMedium>{flight.bounds[1].destination.code}</StyledFontMedium>
      </FromBoxRightBottom>
      <HourBoxRightBottom>
        <StyledBoldBig>22:30</StyledBoldBig>
      </HourBoxRightBottom>
      <DayBoxRightBottom>
        <StyledFontMedium>vri 04 feb</StyledFontMedium>
      </DayBoxRightBottom>

      <PriceContainerDesktop />
      <TriangleBox>
        <Triangle />
      </TriangleBox>
      <PriceBox>
        <PriceText>
          <StyledBoldBig>€</StyledBoldBig>
          <StyledBoldBig>{flight.price.amount}</StyledBoldBig>
          <StyledFontLight>p.p.</StyledFontLight>
        </PriceText>
        <ButtonBox>
          <StyledButton>Book flight</StyledButton>
        </ButtonBox>
      </PriceBox>
    </DesktopContainer>
  );
}
