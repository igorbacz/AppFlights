import styled from "styled-components";
import { theme } from "../../theme";
import { device } from "../../constant/breakpoints";

export const StyledNav = styled.nav`
  background-color: ${theme.palette.success.main};
  width: 100%;
  height: 100px;
  padding: 20px;
  border-bottom: 1px ${theme.palette.primary.main} solid;
  display: grid;
  grid-template-columns: 2fr 3fr 6fr;
  grid-template-rows: 1fr;
  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 2fr 3fr 6fr;
    grid-template-rows: 1fr;
    height: 50px;
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 2fr 3fr 6fr;
    grid-template-rows: 1fr;
    height: 50px;
  }
  @media ${device.mobile} {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    height: 30px;
  }
`;

export const StyledSelect = styled.select`
  border-radius: 24px;
  cursor: pointer;
  border: 2px ${theme.palette.secondary.main};
  padding-left: 26px;
  background: ${theme.palette.secondary.main} 0% 0% no-repeat padding-box;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  @media ${device.desktop} {
    width: 150px;
    height: 50px;
    font-size: 14px;
  }
  @media ${device.tablet} {
    width: 130px;
    height: 40px;
    font-size: 12px;
  }
  @media ${device.mobile} {
    width: 130px;
    height: 35px;
    font-size: 10px;
  }
`;

export const StyledNavElement = styled.div`
  @media ${device.desktop} {
    grid-column: 2/3;
    grid-row: 1/2;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  @media ${device.tablet} {
    grid-column: 2/3;
    grid-row: 1/2;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  @media ${device.mobile} {
    grid-column: 2/4;
    grid-row: 1/2;
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const StyledNavLogo = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectContainer = styled.div`
  width: 100px;
  position: relative;
  @media ${device.desktop} {
    gap: 10px;
    width: 100px;
  }
  @media ${device.tablet} {
    gap: 8px;
    width: 100px;
  }
  @media ${device.mobile} {
    gap: 8px;
    width: 80px;
  }
`;
