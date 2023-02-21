import React, { useContext } from "react";
import { ChangeEvent } from "react";
import { FlightsContext } from "../../context/ContextProvider";
import { StyledFontMedium } from "../Flight/styles";
import { SearchBarContainer, StyledSelect } from "./styles";

export const SearchBar = () => {
  const appContext: {
    sorting?: string;
    setSorting?: React.Dispatch<React.SetStateAction<string>>;
  } = useContext(FlightsContext);

  const { setSorting, sorting } = appContext;
  const sortHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    setSorting(target.value);
  };
  return (
    <SearchBarContainer>
      <StyledFontMedium>Sort by :</StyledFontMedium>
      <StyledSelect value={sorting} title="" onChange={sortHandler}>
        <option value="price">Cheapest first</option>
        <option value="time">Fastest first</option>
      </StyledSelect>
    </SearchBarContainer>
  );
};
