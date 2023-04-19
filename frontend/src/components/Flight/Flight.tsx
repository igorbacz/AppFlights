import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Details, FlightTypes } from "../../types/types";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { RouterChildContext, useHistory } from "react-router-dom";
import * as styled from "./styles";
import { formatDuration } from "../../utils/duration";
import { useState } from "react";
import { TableDetails } from "./components/TableDetails";
import { DateTime, Duration } from "luxon";
import { theme } from "../../theme";
import { API_URL } from "../../constant/apiUrl";
import CircularProgress from "@mui/material/CircularProgress";
import { Paths } from "../../routes/routesMap";
import apiClient from "../../service/api/apiClient";

export const Flight = ({ uuid, airlineCode, price, bounds }: FlightTypes): JSX.Element => {
  const [currentFlightDetails, setCurrentFlightDetails] = useState<Details>();
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [loadingDetails, setLoadingDetails] = useState<boolean>(false);
  const [loadingBooking, setLoadingBooking] = useState<boolean>(false);

  let history: RouterChildContext["router"]["history"] = useHistory();

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
    try {
      const response = await apiClient.postReq(`${Paths.Flights}/${uuid}`);
      setLoadingBooking(false);
      history.push(`${Paths.Confirmation}`);
    } catch (error) {
      alert("Could not booked this flight");
    }
  };

  const handleBookFlight = (): void => {
    setLoadingBooking(true);
    bookFlight();
  };

  const getFlightDetails = async (): Promise<FlightTypes[]> => {
    const response = await fetch(`${API_URL}${Paths.Flights}/${uuid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      alert("Could not fetch flight details");
    }
    const data = await response.json();
    setLoadingDetails(false);
    setCurrentFlightDetails(data);
    return data;
  };

  const handleCheckDetails = (): void => {
    setLoadingDetails(true);
    getFlightDetails();
    setOpenDetails(true);
  };

  return (
    <>
      <styled.FlightContainer>
        <styled.LogoBoxTop>
          <styled.StyledLogo src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${airlineCode}.png`} />
        </styled.LogoBoxTop>

        <styled.BoundDeparture0>
          <styled.StyledFontMedium>{bounds[0].departure.code}</styled.StyledFontMedium>
        </styled.BoundDeparture0>
        <styled.BoundDeparture0Hour>
          <styled.StyledBoldBig>{formatHour(bounds[0].departure.dateTime)}</styled.StyledBoldBig>
        </styled.BoundDeparture0Hour>
        <styled.BoundDeparture0Day>
          <styled.StyledFontMedium>{formatDay(bounds[0].departure.dateTime)}</styled.StyledFontMedium>
        </styled.BoundDeparture0Day>

        <styled.DurationTopBox>
          <styled.StyledFontMedium>{formatDuration(bounds[0].duration)}</styled.StyledFontMedium>
        </styled.DurationTopBox>

        <styled.LineBoxTop>
          <FontAwesomeIcon icon={faCircle} color={theme.palette.primary.main} />
          <styled.Line></styled.Line>
          <FontAwesomeIcon icon={faCircle} color={theme.palette.primary.main} />
        </styled.LineBoxTop>

        <styled.BoundDestination0>
          <styled.StyledFontMedium>{bounds[0].destination.code}</styled.StyledFontMedium>
        </styled.BoundDestination0>
        <styled.BoundDestination0Hour>
          <styled.StyledBoldBig>{calculateDestinationHour(bounds[0].departure.dateTime, bounds[0].duration)}</styled.StyledBoldBig>
        </styled.BoundDestination0Hour>
        <styled.BoundDestination0Day>
          <styled.StyledFontMedium>{formatDay(bounds[0].destination.dateTime)}</styled.StyledFontMedium>
        </styled.BoundDestination0Day>

        <styled.DetailsBox>
          <styled.StyledFontSmall onClick={handleCheckDetails}>Vluchtdetails</styled.StyledFontSmall>
        </styled.DetailsBox>

        <styled.BorderBox />
        {bounds[1] && (
          <>
            <styled.LogoBoxBottom>
              <styled.StyledLogo src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${airlineCode}.png`} />
            </styled.LogoBoxBottom>

            <styled.BoundDeparture1>
              <styled.StyledFontMedium> {bounds[1].departure.code} </styled.StyledFontMedium>
            </styled.BoundDeparture1>
            <styled.BoundDeparture1Hour>
              <styled.StyledBoldBig>{formatHour(bounds[1].departure.dateTime)}</styled.StyledBoldBig>
            </styled.BoundDeparture1Hour>
            <styled.BoundDeparture1Day>
              <styled.StyledFontMedium>{formatDay(bounds[1].departure.dateTime)}</styled.StyledFontMedium>
            </styled.BoundDeparture1Day>

            <styled.DurationBottomBox>
              <styled.StyledFontMedium>{formatDuration(bounds[1].duration)}</styled.StyledFontMedium>
            </styled.DurationBottomBox>

            <styled.LineBoxBottom>
              <FontAwesomeIcon icon={faCircle} color={theme.palette.primary.main} />
              <styled.Line></styled.Line>
              <FontAwesomeIcon icon={faCircle} color={theme.palette.primary.main} />
            </styled.LineBoxBottom>
            <styled.BoundDestination1>
              <styled.StyledFontMedium>{bounds[1].destination.code}</styled.StyledFontMedium>{" "}
            </styled.BoundDestination1>
            <styled.BoundDestination1Hour>
              <styled.StyledBoldBig>{calculateDestinationHour(bounds[1].departure.dateTime, bounds[1].duration)}</styled.StyledBoldBig>
            </styled.BoundDestination1Hour>
            <styled.BoundDestination1Day>
              <styled.StyledFontMedium>{formatDay(bounds[1].destination.dateTime)}</styled.StyledFontMedium>
            </styled.BoundDestination1Day>
          </>
        )}

        <styled.PriceContainer />
        <styled.TriangleBox>
          <styled.Triangle />
        </styled.TriangleBox>
        <styled.PriceBox>
          <styled.PriceText>
            <styled.StyledBoldBig>€</styled.StyledBoldBig>
            <styled.StyledBoldBig>{price.amount}</styled.StyledBoldBig>
            <styled.StyledFontLight>p.p.</styled.StyledFontLight>
          </styled.PriceText>
          <styled.ButtonBox>
            <styled.StyledButton onClick={handleBookFlight}>{loadingBooking ? <CircularProgress /> : "Book flight"}</styled.StyledButton>
          </styled.ButtonBox>
        </styled.PriceBox>
      </styled.FlightContainer>
      {openDetails && (
        <styled.DetailsContainer>
          {loadingDetails ? <CircularProgress /> : <TableDetails currentFlightDetails={currentFlightDetails} closeDetails={setOpenDetails} />}
        </styled.DetailsContainer>
      )}
    </>
  );
};
