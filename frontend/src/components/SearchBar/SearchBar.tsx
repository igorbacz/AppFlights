import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { ChangeEvent } from "react";
import { FlightsContext } from "../../context/ContextProvider";
import { device } from "../../utils/breakpoints";
import { StyledFontMedium } from "../Flight/styles";
import { SelectContainer, StyledNav, StyledNavElement, StyledNavLogo, StyledSelect } from "./styles";

export const SearchBar = () => {
  const appContext: {
    sorting?: string;
    setSortSelect?: React.Dispatch<React.SetStateAction<string>>;
  } = useContext(FlightsContext);

  const { setSortSelect, sorting } = appContext;
  const handleSortSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    setSortSelect(target.value);
  };

  console.log();
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
