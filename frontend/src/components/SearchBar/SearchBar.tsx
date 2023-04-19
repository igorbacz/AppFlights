import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ChangeEvent } from "react";
import { theme } from "../../theme";
import { StyledFontMedium } from "../Flight/styles";
import { SelectContainer, StyledNav, StyledNavElement, StyledNavLogo, StyledSelect } from "./styles";
import { FlightsContext } from "../../context/ContextProvider";

export const SearchBar = (): JSX.Element => {
  const { dispatch } = useContext(FlightsContext);
  const handleSortSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const target = event.target as HTMLSelectElement;
    dispatch({
      type: target.value === "price" ? "SORT_BY_PRICE" : "SORT_BY_DATE",
      payload: [],
    });
  };

  return (
    <StyledNav>
      <StyledNavLogo>
        <FontAwesomeIcon icon={faPlaneDeparture} size="2x" color={theme.palette.primary.main} />
      </StyledNavLogo>
      <StyledNavElement>
        <StyledFontMedium>Sort by :</StyledFontMedium>
        <SelectContainer>
          <StyledSelect title="" onChange={handleSortSelect}>
            <option value="price">Cheapest first</option>
            <option value="time">Fastest first</option>
          </StyledSelect>
        </SelectContainer>
      </StyledNavElement>
    </StyledNav>
  );
};
