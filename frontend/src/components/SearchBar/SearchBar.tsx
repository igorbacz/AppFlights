import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { ChangeEvent } from "react";
import { FlightsContext } from "../../context/ContextProvider";
import { StyledFontMedium } from "../Flight/styles";
import { SelectContainer, StyledNav, StyledNavElement, StyledNavLogo, StyledSelect } from "./styles";

export const SearchBar = (): JSX.Element => {
  const appContext: {
    setSortSelect?: React.Dispatch<React.SetStateAction<string>>;
  } = useContext(FlightsContext);
  const { setSortSelect } = appContext;

  const handleSortSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const target = event.target as HTMLSelectElement;
    setSortSelect(target.value);
  };

  return (
    <StyledNav>
      <StyledNavLogo>
        <FontAwesomeIcon icon={faPlaneDeparture} size="2x" color="#FCC002" />
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
