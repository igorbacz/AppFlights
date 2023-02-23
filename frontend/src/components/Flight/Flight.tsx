import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Details, FlightTypes } from "../../types/types";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { RouterChildContext, useHistory } from "react-router-dom";
import {
  FlightContainer,
  LogoBoxTop,
  StyledLogo,
  BoundDeparture0,
  StyledFontMedium,
  BoundDeparture0Hour,
  StyledBoldBig,
  BoundDeparture0Day,
  DurationTopBox,
  LineBoxTop,
  Line,
  BoundDestination0,
  BoundDestination0Hour,
  BoundDestination0Day,
  DetailsBox,
  StyledFontSmall,
  BorderBox,
  LogoBoxBottom,
  BoundDeparture1,
  BoundDeparture1Hour,
  BoundDeparture1Day,
  DurationBottomBox,
  LineBoxBottom,
  BoundDestination1,
  BoundDestination1Hour,
  BoundDestination1Day,
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
import { theme } from "../../theme";

export const Flight = ({ uuid, airlineCode, price, bounds }: FlightTypes): JSX.Element => {
  const [currentFlightDetails, setCurrentFlightDetails] = useState<Details>();
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  let history: RouterChildContext["router"]["history"] = useHistory();

  // in line 55 and 60 should be
  //                   (date:string|Date|DateTime)
  //                                       but it doesn't work
  const formatHour = (date: any): string => {
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

  const calculateDestinationHour = (departureTime: Date, duration: string): string => {
    const durationObject = Duration.fromISO(duration).shiftTo("hours", "minutes", "seconds").toObject();
    const jsDate = new Date(departureTime);
    let destinationTime = DateTime.fromJSDate(jsDate).plus({ hours: durationObject.hours, minutes: durationObject.minutes });
    const hour = formatHour(destinationTime);
    return hour;
  };

  const bookFlight = async (): Promise<void> => {
    const response = await fetch(`http://localhost:3001/flights`, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Could not booked this fliht");
    } else if (response.status === 200) {
      history.push(`/confirmation`);
    }
  };

  const handleBookFlight = (): void => {
    bookFlight();
  };

  const getFlyightDetails = async (): Promise<FlightTypes[]> => {
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

  const handleCheckDetails = (): void => {
    getFlyightDetails();
    setOpenDetails(true);
  };

  return (
    <>
      <FlightContainer>
        <LogoBoxTop>
          <StyledLogo src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${airlineCode}.png`} />
        </LogoBoxTop>

        <BoundDeparture0>
          <StyledFontMedium>{bounds[0].departure.code}</StyledFontMedium>
        </BoundDeparture0>
        <BoundDeparture0Hour>
          <StyledBoldBig>{formatHour(bounds[0].departure.dateTime)}</StyledBoldBig>
        </BoundDeparture0Hour>
        <BoundDeparture0Day>
          <StyledFontMedium>{formatDay(bounds[0].departure.dateTime)}</StyledFontMedium>
        </BoundDeparture0Day>

        <DurationTopBox>
          <StyledFontMedium>{formatDuration(bounds[0].duration)}</StyledFontMedium>
        </DurationTopBox>

        <LineBoxTop>
          <FontAwesomeIcon icon={faCircle} color={theme.palette.primary.main} />
          <Line></Line>
          <FontAwesomeIcon icon={faCircle} color={theme.palette.primary.main} />
        </LineBoxTop>

        <BoundDestination0>
          <StyledFontMedium>{bounds[0].destination.code}</StyledFontMedium>
        </BoundDestination0>
        <BoundDestination0Hour>
          <StyledBoldBig>{calculateDestinationHour(bounds[0].departure.dateTime, bounds[0].duration)}</StyledBoldBig>
        </BoundDestination0Hour>
        <BoundDestination0Day>
          <StyledFontMedium>{formatDay(bounds[0].destination.dateTime)}</StyledFontMedium>
        </BoundDestination0Day>

        <DetailsBox>
          <StyledFontSmall onClick={handleCheckDetails}>Vluchtdetails</StyledFontSmall>
        </DetailsBox>

        <BorderBox />
        {bounds[1] && (
          <>
            <LogoBoxBottom>
              <StyledLogo src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${airlineCode}.png`} />
            </LogoBoxBottom>

            <BoundDeparture1>
              <StyledFontMedium> {bounds[1].departure.code} </StyledFontMedium>
            </BoundDeparture1>
            <BoundDeparture1Hour>
              <StyledBoldBig>{formatHour(bounds[1].departure.dateTime)}</StyledBoldBig>
            </BoundDeparture1Hour>
            <BoundDeparture1Day>
              <StyledFontMedium>{formatDay(bounds[1].departure.dateTime)}</StyledFontMedium>
            </BoundDeparture1Day>

            <DurationBottomBox>
              <StyledFontMedium>{formatDuration(bounds[1].duration)}</StyledFontMedium>
            </DurationBottomBox>

            <LineBoxBottom>
              <FontAwesomeIcon icon={faCircle} color={theme.palette.primary.main} />
              <Line></Line>
              <FontAwesomeIcon icon={faCircle} color={theme.palette.primary.main} />
            </LineBoxBottom>
            <BoundDestination1>
              <StyledFontMedium>{bounds[1].destination.code}</StyledFontMedium>{" "}
            </BoundDestination1>
            <BoundDestination1Hour>
              <StyledBoldBig>{calculateDestinationHour(bounds[1].departure.dateTime, bounds[1].duration)}</StyledBoldBig>
            </BoundDestination1Hour>
            <BoundDestination1Day>
              <StyledFontMedium>{formatDay(bounds[1].destination.dateTime)}</StyledFontMedium>
            </BoundDestination1Day>
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
