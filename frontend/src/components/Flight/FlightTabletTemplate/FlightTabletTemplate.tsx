import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { flight } from "../../../types";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import {
  Line,
  StyledFontLittle,
  Triangle,
  StyledFontLight,
  ButtonBox,
} from "../FlightDesktopTemplate/styles";
import { TabletContainer, LogoBoxTopTablet, StyledLogoTablet, StyledFontMediumTablet, StyledBoldBigTablet, DurationTopBoxTablet, DetailsBoxTablet, LogoBoxBottomTablet, FromBoxLeftBottomTablet, HourBoxLeftBottomTablet, DayBoxLeftBottomTablet, DurationBottomBoxTablet, LineBoxBottomTablet, FromBoxRightBottomTablet, HourBoxRightBottomTablet, DayBoxRightBottomTablet, TriangleBoxTablet, PriceBoxTablet, PriceTextTablet, StyledButtonTablet, BorderBoxTablet, PriceContainerTablet, FromBoxLeftTopTablet, DayBoxLeftTopTablet, HourBoxLeftTopTablet, LineBoxTopTablet, HourBoxRightTopTablet, FromBoxRightTopTablet, DayBoxRightTopTablet } from "./styles";

export const FlightTabletTemplate = () => {

  let fullDate = flight.bounds[0].departure.dateTime
 console.log(fullDate);

  const  date = new Date(fullDate);
  let minutes = date.getUTCMinutes();
// const date1 = 
  const hoursMin = date.getHours() + ":" + date.getMinutes();
  console.log(hoursMin)

  
  //  dateTime: "2023-05-09T22:00:00.000Z",
  return (
    <TabletContainer>
      <LogoBoxTopTablet>
        <StyledLogoTablet src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${flight.airlineCode}.png`} />
      </LogoBoxTopTablet>

      <FromBoxLeftTopTablet>
        <StyledFontMediumTablet>{flight.bounds[0].departure.code}</StyledFontMediumTablet>
      </FromBoxLeftTopTablet>
      <HourBoxLeftTopTablet>
        <StyledBoldBigTablet>20:35</StyledBoldBigTablet>
      </HourBoxLeftTopTablet>
      <DayBoxLeftTopTablet>
        <StyledFontMediumTablet>vri 04 feb</StyledFontMediumTablet>
      </DayBoxLeftTopTablet>

      <DurationTopBoxTablet>
        <StyledFontMediumTablet>2u 55m</StyledFontMediumTablet>
      </DurationTopBoxTablet>

      <LineBoxTopTablet>
        <FontAwesomeIcon icon={faCircle} color="#FCC002" />
        <Line></Line>
        <FontAwesomeIcon icon={faCircle} color="#FCC002" />
      </LineBoxTopTablet>

      <FromBoxRightTopTablet>
        <StyledFontMediumTablet>{flight.bounds[0].destination.code}</StyledFontMediumTablet>
      </FromBoxRightTopTablet>
      <HourBoxRightTopTablet>
        <StyledBoldBigTablet>22:30</StyledBoldBigTablet>
      </HourBoxRightTopTablet>
      <DayBoxRightTopTablet>
        <StyledFontMediumTablet>vri 04 feb</StyledFontMediumTablet>
      </DayBoxRightTopTablet>

      <DetailsBoxTablet>
        <StyledFontLittle>Vluchtdetails</StyledFontLittle>
      </DetailsBoxTablet>

      <BorderBoxTablet />

      <LogoBoxBottomTablet>
        <StyledLogoTablet src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${flight.airlineCode}.png`} />
      </LogoBoxBottomTablet>

      <FromBoxLeftBottomTablet>
        <StyledFontMediumTablet>{flight.bounds[1].departure.code}</StyledFontMediumTablet>
      </FromBoxLeftBottomTablet>
      <HourBoxLeftBottomTablet>
        <StyledBoldBigTablet>20:35</StyledBoldBigTablet>
      </HourBoxLeftBottomTablet>
      <DayBoxLeftBottomTablet>
        <StyledFontMediumTablet>vri 04 feb</StyledFontMediumTablet>
      </DayBoxLeftBottomTablet>

      <DurationBottomBoxTablet>
        <StyledFontMediumTablet>2u 55m</StyledFontMediumTablet>
      </DurationBottomBoxTablet>

      <LineBoxBottomTablet>
        <FontAwesomeIcon icon={faCircle} color="#FCC002" />
        <Line></Line>
        <FontAwesomeIcon icon={faCircle} color="#FCC002" />
      </LineBoxBottomTablet>

      <FromBoxRightBottomTablet>
        <StyledFontMediumTablet>{flight.bounds[1].destination.code}</StyledFontMediumTablet>
      </FromBoxRightBottomTablet>
      <HourBoxRightBottomTablet>
        <StyledBoldBigTablet>22:30</StyledBoldBigTablet>
      </HourBoxRightBottomTablet>
      <DayBoxRightBottomTablet>
        <StyledFontMediumTablet>vri 04 feb</StyledFontMediumTablet>
      </DayBoxRightBottomTablet>

      <PriceContainerTablet />
      <TriangleBoxTablet>
        <Triangle />
      </TriangleBoxTablet>
      <PriceBoxTablet>
        <PriceTextTablet>
          <StyledBoldBigTablet>€</StyledBoldBigTablet>
          <StyledBoldBigTablet>{flight.price.amount}</StyledBoldBigTablet>
          <StyledFontLight>p.p.</StyledFontLight>
        </PriceTextTablet>
        <ButtonBox>
          <StyledButtonTablet>Book flight</StyledButtonTablet>
        </ButtonBox>
      </PriceBoxTablet>
    </TabletContainer>
  );
};
