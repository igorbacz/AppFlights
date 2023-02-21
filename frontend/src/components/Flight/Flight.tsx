import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { flight, FlightInterface } from "../../types";
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
import { dateDestinationISO } from "../../utils/destinationTime";
import { MouseEventHandler } from "react";

moment.locale("nl");

export const Flight = ({ uuid, airlineCode, price, bounds }: FlightInterface): JSX.Element => {
  let fullDate1 = new Date(bounds[0].departure.dateTime);
  // let fullDate2 = new Date(bounds[0]?.departure.dateTime);
  // const departureDay1 = moment(bounds[0].departure.dateTime).locale("nl").format("dd DD MMM");
  // const departureTime1 = moment(bounds[0].departure.dateTime).format("h:mm");
  // const duration1 = formatDuration(bounds[0].duration);
  // // console.log(dateDestinationISO(flight.bounds[0].duration, fullDate1));

  // const departureDay2 = moment(bounds[1].departure.dateTime).locale("nl").format("dd DD MMM");

  const dateDestinationObject1 = new Date(dateDestinationISO(bounds[0].duration, fullDate1));

  // const dateDestinationObject2 = new Date(dateDestinationISO(bounds[1]?.duration, fullDate1));
  const destinationDay1 = moment(dateDestinationObject1).locale("nl").format("dd DD MMM");
  // console.log(destinationDay1);
  const departureTime1 = moment(dateDestinationObject1).format("h:mm");
  // console.log(departureTime1);

  let history = useHistory();

  const bookFlight = async () => {
    const response = await fetch(`http://localhost:3001/flights`, {
      method: "POST",
    });

    if (response.status == 200) {
      history.push(`/confirmation`);
    }
  };

  const handleBookFlight = (): void => {
    // e.preventDefault();
    bookFlight();
  };

  return (
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
        <StyledBoldBig>22:30</StyledBoldBig>
      </HourBoxRightTop>
      <DayBoxRightTop>
        <StyledFontMedium>{moment(bounds[0].departure.dateTime).locale("nl").format("dd DD MMM")}</StyledFontMedium>
      </DayBoxRightTop>

      <DetailsBox>
        <StyledFontSmall>Vluchtdetails</StyledFontSmall>
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
            <StyledBoldBig>22:30</StyledBoldBig>
          </HourBoxRightBottom>
          <DayBoxRightBottom>
            <StyledFontMedium>vri 04 feb</StyledFontMedium>
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
  );
};
