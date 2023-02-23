import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Details, FlightInterface } from "../../types/types";
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
  DetailsContainer,
} from "./styles";
import { formatDuration } from "../../utils/duration";
import { useState } from "react";
import { TableDetails } from "./TableDetails";
import { DateTime, Duration } from "luxon";

export const Flight = ({ uuid, airlineCode, price, bounds }: FlightInterface): JSX.Element => {
  const [currentFlightDetails, setCurrentFlightDetails] = useState<Details>();
  const [openDetails, setOpenDetails] = useState(false);
  let history = useHistory();

  //should be
  //          (date:string|Date|DateTime)
  //                                       but it doesn't work
  const formatHour = (date: any) => {
    const luxonDate = DateTime.fromISO(date);
    return luxonDate.toLocaleString(DateTime.TIME_24_SIMPLE);
  };

  const formatDay = (date: any): string => {
    const jsDate = new Date(date);
    return new Intl.DateTimeFormat("nl-NL", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }).format(jsDate);
  };

  const calculateDestinationHour = (departureTime: any, duration: string) => {
    const durationObject = Duration.fromISO(duration).shiftTo("hours", "minutes", "seconds").toObject();
    const jsDate = new Date(departureTime);
    let destinationTime = DateTime.fromJSDate(jsDate).plus({ hours: durationObject.hours, minutes: durationObject.minutes });
    const hour = formatHour(destinationTime);
    return hour;
  };

  const bookFlight = async () => {
    const response = await fetch(`http://localhost:3001/flights`, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Could not booked this fliht");
    } else if (response.status == 200) {
      history.push(`/confirmation`);
    }
  };

  const handleBookFlight = (): void => {
    bookFlight();
  };

  const getFlyightDetails = async () => {
    const response = await fetch(`http://localhost:3001/flights/${uuid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Could not fetch flight details");
    }
    const data = await response.json();
    setCurrentFlightDetails(data);
    return data;
  };

  const handleCheckDetails = () => {
    getFlyightDetails();
    setOpenDetails(true);
  };

  return (
    <>
      <FlightContainer>
        <LogoBoxTop>
          <StyledLogo src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${airlineCode}.png`} />
        </LogoBoxTop>

        <FromBoxLeftTop>
          <StyledFontMedium>{bounds[0].departure.code}</StyledFontMedium>
        </FromBoxLeftTop>
        <HourBoxLeftTop>
          <StyledBoldBig>{formatHour(bounds[0].departure.dateTime)}</StyledBoldBig>
        </HourBoxLeftTop>
        <DayBoxLeftTop>
          <StyledFontMedium>{formatDay(bounds[0].departure.dateTime)}</StyledFontMedium>
        </DayBoxLeftTop>

        <DurationTopBox>
          <StyledFontMedium>{formatDuration(bounds[0].duration)}</StyledFontMedium>
        </DurationTopBox>

        <LineBoxTop>
          <FontAwesomeIcon icon={faCircle} color="#FCC002" />
          <Line></Line>
          <FontAwesomeIcon icon={faCircle} color="#FCC002" />
        </LineBoxTop>

        <FromBoxRightTop>
          <StyledFontMedium>{bounds[0].destination.code}</StyledFontMedium>
        </FromBoxRightTop>
        <HourBoxRightTop>
          <StyledBoldBig>{calculateDestinationHour(bounds[0].departure.dateTime, bounds[0].duration)}</StyledBoldBig>
        </HourBoxRightTop>
        <DayBoxRightTop>
          <StyledFontMedium>{formatDay(bounds[0].destination.dateTime)}</StyledFontMedium>
        </DayBoxRightTop>

        <DetailsBox>
          <StyledFontSmall onClick={handleCheckDetails}>Vluchtdetails</StyledFontSmall>
        </DetailsBox>

        <BorderBox />
        {bounds[1] && (
          <>
            <LogoBoxBottom>
              <StyledLogo src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${airlineCode}.png`} />
            </LogoBoxBottom>

            <FromBoxLeftBottom>
              <StyledFontMedium> {bounds[1].departure.code} </StyledFontMedium>
            </FromBoxLeftBottom>
            <HourBoxLeftBottom>
              <StyledBoldBig>{formatHour(bounds[1].departure.dateTime)}</StyledBoldBig>
            </HourBoxLeftBottom>
            <DayBoxLeftBottom>
              <StyledFontMedium>{formatDay(bounds[1].departure.dateTime)}</StyledFontMedium>
            </DayBoxLeftBottom>

            <DurationBottomBox>
              <StyledFontMedium>{formatDuration(bounds[1].duration)}</StyledFontMedium>
            </DurationBottomBox>

            <LineBoxBottom>
              <FontAwesomeIcon icon={faCircle} color="#FCC002" />
              <Line></Line>
              <FontAwesomeIcon icon={faCircle} color="#FCC002" />
            </LineBoxBottom>
            <FromBoxRightBottom>
              <StyledFontMedium>{bounds[1].destination.code}</StyledFontMedium>{" "}
            </FromBoxRightBottom>
            <HourBoxRightBottom>
              <StyledBoldBig>{calculateDestinationHour(bounds[1].departure.dateTime, bounds[1].duration)}</StyledBoldBig>
            </HourBoxRightBottom>
            <DayBoxRightBottom>
              <StyledFontMedium>{formatDay(bounds[1].destination.dateTime)}</StyledFontMedium>
            </DayBoxRightBottom>
          </>
        )}

        <PriceContainer />
        <TriangleBox>
          <Triangle />
        </TriangleBox>
        <PriceBox>
          <PriceText>
            <StyledBoldBig>€</StyledBoldBig>
            <StyledBoldBig>{price.amount}</StyledBoldBig>
            <StyledFontLight>p.p.</StyledFontLight>
          </PriceText>
          <ButtonBox>
            <StyledButton onClick={handleBookFlight}>Book flight</StyledButton>
          </ButtonBox>
        </PriceBox>
      </FlightContainer>
      {openDetails && (
        <DetailsContainer>
          <TableDetails currentFlightDetails={currentFlightDetails} closeDetails={setOpenDetails} />
        </DetailsContainer>
      )}
    </>
  );
};
