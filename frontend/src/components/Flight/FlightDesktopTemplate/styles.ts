import styled from "styled-components";

export const DesktopContainer = styled.div`
  width: 728px;
  height: 260px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  top: 20px;
  left: 20px;
  display: grid;
  grid-template-columns: 107px 107px 107px 107px 80px 220px;
  grid-template-rows:  43px 43px 43px 43px 43px 43px;
`;

export const PriceContainerDesktop = styled.div`
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 5;
  background-color: #fcc002;
`;
export const PriceBox = styled.div`
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 5;
  grid-row-end: 8;
  background-color: #fcc002;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap:10px;
`;

export const PriceText = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 180px;
  height: 48px;
  background: #008eff 0% 0% no-repeat padding-box;
  border-radius: 24px;
  opacity: 1;
  text-align: center;
  font: normal normal bold 20px/20px Montserrat;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  border-width: 0px;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const StyledBoldBig = styled.h3`
  color: #000000;
  opacity: 1;
  font: normal normal bold 32px/25px Montserrat;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

export const StyledFontLight = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const StyledFontMedium = styled.p`
  font-size: 18px;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

export const StyledLogo = styled.img`
  width: 53px;
  height: 49px;

`;

export const ButtonBox = styled.div`
  padding-bottom: 6px;
`;

export const LogoBoxTop = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FromBoxLeftTop = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const HourBoxLeftTop = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const DayBoxLeftTop = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  justify-content: flex-end;
`;

export const FromBoxRightTop = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const HourBoxRightTop = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const DayBoxRightTop = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 5;
  display: flex;
  justify-content: flex-start;
`;

export const FromBoxLeftBottom = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const HourBoxLeftBottom = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const DayBoxLeftBottom = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
  display: flex;
  justify-content: flex-end;
`;

export const FromBoxRightBottom = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 5;
  grid-row-end: 6;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const HourBoxRightBottom = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 7;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const DayBoxRightBottom = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 7;
  grid-row-end: 8;
  display: flex;
  justify-content: flex-start;
`;

export const BorderBox = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 5;
  border-bottom: 1px black solid;
  margin-left: 20px;
  margin-right: 20px;
      z-index: 1;
`;

export const LineWithDots = styled.div`
  height: 4px;
  background: #000;
`;

export const LineBoxTop = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  z-index:1;
   padding: 0px 10px 0px 10px;
`;

export const Line = styled.hr`
  border: 1px solid #fcc002;
  width: 80%;
`;

export const LogoBoxBottom = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const LineBoxBottom = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 7;
  display: flex;
  align-items: center;
   padding: 0px 10px 0px 10px;
`;

export const TriangleBox = styled.div`
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 4;
  grid-row-end: 5;
  display: flex;
  align-items: flex-end;
  margin-top: 52px;
`;

export const Triangle = styled.div`
  width: 26px;
  height: 26px;
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  background: #fcc002 0% 0% no-repeat padding-box;
`;

export const StyledFontLittle = styled.p`
  font-size: 10px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: black;
  text-decoration: underline;
`;

export const DetailsBox = styled.div`
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: flex-end;
  padding-top: 31px;
`;


export const DurationTopBox = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const DurationBottomBox = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`; 
