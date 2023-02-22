import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Details, flight, FlightInterface } from "../../types/types";
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
import moment from "moment";
import { formatDuration } from "../../utils/duration";
import { useState } from "react";
import { TableDetails } from "./TableDetails";

moment.locale("nl");

export const Flight = ({ uuid, airlineCode, price, bounds }: FlightInterface): JSX.Element => {
  const [currentFlightDetails, setCurrentFlightDetails] = useState<Details>();
  const [openDetails, setOpenDetails] = useState(false);
  let history = useHistory();

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
          <StyledBoldBig>{moment(bounds[0].departure.dateTime).format("h:mm")}</StyledBoldBig>
        </HourBoxLeftTop>
        <DayBoxLeftTop>
          <StyledFontMedium>{moment(bounds[0].departure.dateTime).locale("nl").format("dd DD MMM")}</StyledFontMedium>
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
          <StyledBoldBig>{moment(bounds[0].destination.dateTime).format("h:mm")}</StyledBoldBig>
        </HourBoxRightTop>
        <DayBoxRightTop>
          <StyledFontMedium>{moment(bounds[0].destination.dateTime).locale("nl").format("dd DD MMM")}</StyledFontMedium>
        </DayBoxRightTop>

        <DetailsBox>
          <StyledFontSmall onClick={handleCheckDetails}>Vluchtdetails</StyledFontSmall>
        </DetailsBox>

        <BorderBox />
        {!bounds[1] ? null : (
          <>
            <LogoBoxBottom>
              <StyledLogo src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${flight.airlineCode}.png`} />
            </LogoBoxBottom>

            <FromBoxLeftBottom>
              <StyledFontMedium> {bounds[1].departure.code} </StyledFontMedium>
            </FromBoxLeftBottom>
            <HourBoxLeftBottom>
              <StyledBoldBig>{moment(bounds[1].departure.dateTime).format("h:mm")}</StyledBoldBig>
            </HourBoxLeftBottom>
            <DayBoxLeftBottom>
              <StyledFontMedium>{moment(bounds[1].departure.dateTime).locale("nl").format("dd DD MMM")}</StyledFontMedium>
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
              <StyledBoldBig>{moment(bounds[1].destination.dateTime).locale("nl").format("h:mm")}</StyledBoldBig>
            </HourBoxRightBottom>
            <DayBoxRightBottom>
              <StyledFontMedium>{moment(bounds[1].departure.dateTime).locale("nl").format("dd DD MMM")}</StyledFontMedium>
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
