import styled from "styled-components";
import { theme } from "../../theme";
import { device } from "../../constant/breakpoints";

export const ConfirmPageContainer = styled.div`
  padding-top: 100px;

  @media ${device.desktop} {
    display: flex;
    justify-content: center;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
  @media ${device.mobile} {
    display: flex;
    justify-content: center;
  }
`;
export const ConfirmationBox = styled.div`
  width: 350px;
  height: 200px;
  background: ${theme.palette.success.main} 0% 0% no-repeat padding-box;
  padding: 50px;

  gap: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ConfirmTextBox = styled.div`
  @media ${device.desktop} {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  @media ${device.mobile} {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
`;
