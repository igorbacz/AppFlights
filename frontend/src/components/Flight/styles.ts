import styled from "styled-components";
import { theme } from "../../theme";
import { device } from "../../constant/breakpoints";

export const FlightContainer = styled.div`
  background: ${theme.palette.success.main} 0% 0% no-repeat padding-box;
  opacity: 1;
  top: 20px;
  left: 20px;

  @media ${device.mobile} {
    width: 335px;
    height: 320px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 42px) 64px;
  }

  @media ${device.tablet} {
    width: 540px;
    height: 236px;
    display: grid;
    grid-template-columns: 123px 100px 123px 194px;
    grid-template-rows: repeat(6, 39px);
  }
  @media ${device.desktop} {
    width: 728px;
    height: 260px;
    display: grid;
    grid-template-columns: 107px 107px 107px 107px 80px 220px;
    grid-template-rows: repeat(6, 43px);
  }
`;
export const PriceContainer = styled.div`
  background-color: ${theme.palette.primary.main};

  @media ${device.desktop} {
    grid-column: 6/7;
    grid-row: 1/5;
  }
  @media ${device.tablet} {
    grid-column: 4/5;
    grid-row: 1/5;
  }
  @media ${device.mobile} {
    display: none;
  }
`;
export const PriceBox = styled.div`
  background-color: ${theme.palette.primary.main};
  z-index: 3;
  @media ${device.desktop} {
    grid-column: 6/7;
    grid-row: 4/7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }

  @media ${device.tablet} {
    grid-column: 4/5;
    grid-row: 5/7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    align-items: flex-start;
    padding-left: 10px;
  }
  @media ${device.mobile} {
    grid-column: 1/4;
    grid-row: 7/8;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
  }
`;

export const PriceText = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.palette.secondary.main} 0% 0% no-repeat padding-box;
  border-radius: 24px;
  opacity: 1;
  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
  border-width: 0px; 
  padding-bottom: 10px;
  padding-top: 10px;
  cursor: pointer;
  z-index:2;
font-weight: bold;
  &:hover {
    background: ${theme.palette.success.main};
    color: ${theme.palette.secondary.main};
    border: solid 3px ${theme.palette.secondary.main};
  }
  @media ${device.mobile} {
    width: 140px;
    height: 44px;
    font-size:16px
  }
  }
  @media ${device.tablet} {
    width: 140px;
    height: 44px;
     font-size:16px
  }

  @media ${device.desktop} {
    width: 180px;
    height: 48px;
   font-size:20px;
  }
`;

export const StyledBoldBig = styled.h3`
  color: #000000;
  font: normal normal bold Montserrat;
  margin-block-start: 0em;
  margin-block-end: 0em;
  @media ${device.mobile} {
    font-size: 28px;
  }
  @media ${device.tablet} {
    font-size: 28px;
  }

  @media ${device.desktop} {
    font-size: 32px;
  }
`;

export const StyledFontLight = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const StyledFontMedium = styled.p`
  margin-block-start: 0em;
  margin-block-end: 0em;

  @media ${device.mobile} {
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.desktop} {
    font-size: 18px;
  }
`;

export const StyledLogo = styled.img`
  @media ${device.mobile} {
    width: 37px;
    height: 35px;
  }
  @media ${device.tablet} {
    width: 37px;
    height: 35px;
  }
  @media ${device.desktop} {
    width: 53px;
    height: 49px;
  }
`;

export const ButtonBox = styled.div`
  padding-bottom: 6px;
`;

export const LogoBoxTop = styled.div`
  @media ${device.mobile} {
    grid-column: 1/2;
    grid-row: 1/2;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 10px;
  }
  @media ${device.tablet} {
    grid-column: 1/2;
    grid-row: 1/2;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 10px;
  }
  @media ${device.desktop} {
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BoundDeparture0 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media ${device.mobile} {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  @media ${device.tablet} {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  @media ${device.desktop} {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;
export const BoundDeparture0Hour = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media ${device.mobile} {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  @media ${device.tablet} {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  @media ${device.desktop} {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;
export const BoundDeparture0Day = styled.div`
  display: flex;
  justify-content: flex-end;
  @media ${device.mobile} {
    grid-column: 1/2;
    grid-row: 3/4;
  }
  @media ${device.tablet} {
    grid-column: 1/2;
    grid-row: 3/4;
  }
  @media ${device.desktop} {
    grid-column: 2/3;
    grid-row: 3/4;
  }
`;

export const BoundDestination0 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  @media ${device.mobile} {
    grid-column: 3/4;
    grid-row: 1/2;
  }
  @media ${device.tablet} {
    grid-column: 3/4;
    grid-row: 1/2;
  }
  @media ${device.desktop} {
    grid-column: 4/5;
    grid-row: 1/2;
  }
`;
export const BoundDestination0Hour = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media ${device.mobile} {
    grid-column: 3/4;
    grid-row: 2/3;
  }
  @media ${device.tablet} {
    grid-column: 3/4;
    grid-row: 2/3;
  }
  @media ${device.desktop} {
    grid-column: 4/5;
    grid-row: 2/3;
  }
`;
export const BoundDestination0Day = styled.div`
  display: flex;
  justify-content: flex-start;
  @media ${device.mobile} {
    grid-column: 3/4;
    grid-row: 3/4;
  }
  @media ${device.tablet} {
    grid-column: 3/4;
    grid-row: 3/4;
  }
  @media ${device.desktop} {
    grid-column: 4/5;
    grid-row: 3/4;
  }
`;

export const BoundDeparture1 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media ${device.mobile} {
    grid-column: 1/2;
    grid-row: 4/5;
  }
  @media ${device.tablet} {
    grid-column: 1/2;
    grid-row: 4/5;
  }
  @media ${device.desktop} {
    grid-column: 2/3;
    grid-row: 4/5;
  }
`;
export const BoundDeparture1Hour = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media ${device.mobile} {
    grid-column: 1/2;
    grid-row: 5/6;
  }
  @media ${device.tablet} {
    grid-column: 1/2;
    grid-row: 5/6;
  }
  @media ${device.desktop} {
    grid-column: 2/3;
    grid-row: 5/6;
  }
`;
export const BoundDeparture1Day = styled.div`
  display: flex;
  justify-content: flex-end;
  @media ${device.mobile} {
    grid-column: 1/2;
    grid-row: 6/7;
  }
  @media ${device.tablet} {
    grid-column: 1/2;
    grid-row: 6/7;
  }
  @media ${device.desktop} {
    grid-column: 2/3;
    grid-row: 6/7;
  }
`;

export const BoundDestination1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  @media ${device.mobile} {
    grid-column: 3/4;
    grid-row: 4/5;
  }
  @media ${device.tablet} {
    grid-column: 3/4;
    grid-row: 4/5;
  }
  @media ${device.desktop} {
    grid-column: 4/5;
    grid-row: 4/5;
`;
export const BoundDestination1Hour = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media ${device.mobile} {
    grid-column: 3/4;
    grid-row: 5/6;
  }
  @media ${device.tablet} {
    grid-column: 3/4;
    grid-row: 5/6;
  }
  @media ${device.desktop} {
    grid-column: 4/5;
    grid-row: 5/6;
  }
`;

export const BoundDestination1Day = styled.div`
  display: flex;
  justify-content: flex-start;
  @media ${device.mobile} {
    grid-column: 3/4;
    grid-row: 6/7;
  }
  @media ${device.tablet} {
    grid-column: 3/4;
    grid-row: 6/7;
  }
  @media ${device.desktop} {
    grid-column: 4/5;
    grid-row: 6/7;
  }
`;

export const BorderBox = styled.div`
  grid-column: 1/6;
  grid-row: 2/5;
  border-bottom: 1px black solid;
  margin-left: 20px;
  margin-right: 20px;
  z-index: 1;
  @media ${device.mobile} {
    grid-column: 1/4;
    grid-row: 2/4;
  }
  @media ${device.tablet} {
    grid-column: 1/4;
    grid-row: 2/4;
  }
  @media ${device.desktop} {
    grid-column: 1/6;
    grid-row: 2/4;
  }
`;

export const LineBoxTop = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0px 10px 0px 10px;
  @media ${device.mobile} {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  @media ${device.tablet} {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  @media ${device.desktop} {
    grid-column: 3/4;
    grid-row: 2/3;
  }
`;
export const Line = styled.hr`
  border: 1px solid ${theme.palette.primary.main};
  width: 80%;
`;

export const LogoBoxBottom = styled.div`
  @media ${device.mobile} {
    grid-column: 1/2;
    grid-row: 4/5;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 10px;
  }
  @media ${device.tablet} {
    grid-column: 1/2;
    grid-row: 4/5;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 10px;
  }
  @media ${device.desktop} {
    grid-column: 1/2;
    grid-row: 5/6;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LineBoxBottom = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 10px;
  @media ${device.mobile} {
    grid-column: 2/3;
    grid-row: 5/6;
  }
  @media ${device.tablet} {
    grid-column: 2/3;
    grid-row: 5/6;
  }
  @media ${device.desktop} {
    grid-column: 3/4;
    grid-row: 5/6;
  }
`;

export const TriangleBox = styled.div`
  z-index: 0;
  @media ${device.mobile} {
    grid-column: 2/3;
    grid-row: 7/8;
    display: flex;
    justify-content: center;
    margin-bottom: 52px;
  }
  @media ${device.tablet} {
    grid-column: 4/5;
    grid-row: 3/4;
    display: flex;
    align-items: flex-end;
    margin-top: 52px;
  }
  @media ${device.desktop} {
    display: flex;
    align-items: flex-end;
    grid-column: 6/7;
    grid-row: 3/4;
    margin-top: 57px;
  }
`;

export const Triangle = styled.div`
  width: 26px;
  height: 26px;
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  background: ${theme.palette.primary.main} 0% 0% no-repeat padding-box;
`;

export const StyledFontSmall = styled.p`
  font-size: 10px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: black;
  text-decoration: underline;
`;

export const DetailsBox = styled.div`
  cursor: pointer;
  padding-top: 13px;
  @media ${device.mobile} {
    grid-column: 3/4;
    grid-row: 1/2;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 5px 5px 0px 0px;
  }
  @media ${device.tablet} {
    grid-column: 3/4;
    grid-row: 1/2;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 5px 5px 0px 0px;
  }
  @media ${device.desktop} {
    grid-column: 5/6;
    grid-row: 1/2;
    display: flex;
    justify-content: flex-end;
    padding-right: 8px;
  }
`;

export const DurationTopBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media ${device.mobile} {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  @media ${device.tablet} {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  @media ${device.desktop} {
    grid-column: 3/4;
    grid-row: 1/2;
  }
`;

export const DurationBottomBox = styled.div`
  @media ${device.mobile} {
    grid-column: 2/3;
    grid-row: 4/5;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  @media ${device.tablet} {
    grid-column: 2/3;
    grid-row: 4/5;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-left: 10px;
  }
  @media ${device.desktop} {
    grid-column: 3/4;
    grid-row: 4/5;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

export const DetailsContainer = styled.div`
  background-color: ${theme.palette.success.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 20px 0px;
  gap: 10px;
  @media ${device.desktop} {
    width: 508px;
  }
  @media ${device.tablet} {
    width: 346px;
  }
  @media ${device.mobile} {
    width: 335px;
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 80%;
`;

export const StyledTd = styled.td`
  font-size: 13px;
  border: 1px solid #54585d;
`;

export const StyledCloseButton = styled.button`
  border-radius: 90px;
  background-color: ${theme.palette.primary.main};
  width: 50%;
  cursor: pointer;
  border: solid 2px ${theme.palette.primary.main};
  &:hover {
    border: solid 2px ${theme.palette.primary.main};
    background-color: ${theme.palette.success.main};
  }
`;