import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Bound, flight, FlightInterface, Price } from "../../types";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import { useHistory } from "react-router-dom";
import {
  FlightContainer,
  LogoBoxTop,
  StyledLogo,
  FromBoxLeftTop,
  StyledFontMedium,
  HourBoxLeftTop,
  StyledBoldBig,
  DayBoxLeftTop,
  DurationTopBox,
  LineBoxTop,
  Line,
  FromBoxRightTop,
  HourBoxRightTop,
  DayBoxRightTop,
  DetailsBox,
  StyledFontSmall,
  BorderBox,
  LogoBoxBottom,
  FromBoxLeftBottom,
  HourBoxLeftBottom,
  DayBoxLeftBottom,
  DurationBottomBox,
  LineBoxBottom,
  FromBoxRightBottom,
  HourBoxRightBottom,
  DayBoxRightBottom,
  PriceContainer,
  TriangleBox,
  Triangle,
  PriceBox,
  PriceText,
  StyledFontLight,
  ButtonBox,
  StyledButton,
} from "./styles";
import moment from "moment";
import { formatDuration } from "../../utils/duration";
import { parse, toSeconds } from "iso8601-duration";

export const FlightNaSztywno = () => {
  let fullDate1 = new Date(flight.bounds[0].departure.dateTime);
  let fullDate2 = new Date(flight.bounds[1].departure.dateTime);
  // co;

  const departureTime1 = moment(fullDate1).format("hh:mm");
  const departureTime2 = moment(fullDate2).format("hh:mm");

  const departureDay1 = moment(fullDate1).locale("nl").format("dd DD MMM");
  const departureDay2 = moment(fullDate2).locale("nl").format("dd DD MMM");

  const duration1 = formatDuration(flight.bounds[0].duration);
  const duration2 = formatDuration(flight.bounds[1].duration);

  console.log(fullDate1.getUTCHours());

  const addDuartion = (date: Date, hours: number, minutes: number) => {
    date.setDate(date.getHours() + hours && date.getMinutes() + minutes);
    return date;
  };

  const dateOfDestination = (isoDuration: string, fullDate: Date): Date => {
    const durationSeconds = toSeconds(parse(isoDuration));
    console.log(durationSeconds);
    const dateSeconds = fullDate.getSeconds();
    console.log(dateSeconds);
    return new Date(durationSeconds + dateSeconds);
  };

  console.log(dateOfDestination(flight.bounds[0].duration, fullDate1));

  const date = new Date("2022-05-15T00:00:00.000Z");

  const destinationFullDate1 = addDuartion(fullDate1, 7, 14);

  const destinationTime1 = moment(destinationFullDate1).format("hh:mm");

  let history = useHistory();

  const bookFlight = async () => {
    const response = await fetch(`http://localhost:3001/flights`, {
      method: "POST",
    });

    if (response.status == 200) {
      history.push(`/confirmation`);
    }
  };

  const handleBookFlight = (e: any): void => {
    e.preventDefault();
    bookFlight();
  };
  //@ts-ignore
  return (
    <FlightContainer>
      <LogoBoxTop>
        <StyledLogo src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${flight.airlineCode}.png`} />
      </LogoBoxTop>

      <FromBoxLeftTop>
        <StyledFontMedium>{flight.bounds[0].departure.code}</StyledFontMedium>
      </FromBoxLeftTop>
      <HourBoxLeftTop>
        <StyledBoldBig>{departureTime1}</StyledBoldBig>
      </HourBoxLeftTop>
      <DayBoxLeftTop>
        <StyledFontMedium>{departureDay1}</StyledFontMedium>
      </DayBoxLeftTop>

      <DurationTopBox>
        <StyledFontMedium>{duration1}</StyledFontMedium>
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
        <StyledFontSmall>Vluchtdetails</StyledFontSmall>
      </DetailsBox>

      <BorderBox />

      <LogoBoxBottom>
        <StyledLogo src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${flight.airlineCode}.png`} />
      </LogoBoxBottom>

      <FromBoxLeftBottom>
        <StyledFontMedium>{flight.bounds[1].departure.code}</StyledFontMedium>
      </FromBoxLeftBottom>
      <HourBoxLeftBottom>
        <StyledBoldBig>{departureTime2}</StyledBoldBig>
      </HourBoxLeftBottom>
      <DayBoxLeftBottom>
        <StyledFontMedium>{departureDay2}</StyledFontMedium>
      </DayBoxLeftBottom>

      <DurationBottomBox>
        <StyledFontMedium>{duration2}</StyledFontMedium>
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

      <PriceContainer />
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
          <StyledButton onClick={handleBookFlight}>Book flight</StyledButton>
        </ButtonBox>
      </PriceBox>
    </FlightContainer>
  );
};
