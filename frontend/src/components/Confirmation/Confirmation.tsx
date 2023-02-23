import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { theme } from "../../theme";
import { ButtonBox, StyledButton, StyledFontLight } from "../Flight/styles";
import { ConfirmationBox, ConfirmPageContainer, ConfirmTextBox } from "./style";

export const Confirmation = (): JSX.Element => {
  return (
    <ConfirmPageContainer>
      <ConfirmationBox>
        <ConfirmTextBox>
          <FontAwesomeIcon icon={faPlaneDeparture} size="3x" color={theme.palette.primary.main} />
          <StyledFontLight>Congratulations! Your flight booking is confirmed.</StyledFontLight>
        </ConfirmTextBox>
        <ButtonBox>
          <Link to="/flights">
            <StyledButton>Flyithts list</StyledButton>
          </Link>
        </ButtonBox>
      </ConfirmationBox>
    </ConfirmPageContainer>
  );
};
