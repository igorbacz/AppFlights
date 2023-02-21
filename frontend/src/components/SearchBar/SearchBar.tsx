import React, { useContext } from "react";
import { MouseEventHandler } from "react";
import { ChangeEvent } from "react";
import styled from "styled-components";
import { FlightsContext } from "../../context/ContextProvider";

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
  cursor: pointer;
  &:hover {
    background: white;
    color: #008eff;
    border: solid 3px #008eff;
  }
`;

export const SearchBar = () => {
  const appContext: {
    sorting?: string;
    setSorting?: React.Dispatch<React.SetStateAction<string>> | null;
  } = useContext(FlightsContext);

  const { sorting = "price", setSorting } = appContext;
  const sortHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    //@ts-ignore
    setSorting(event.target.value);
  };
  console.log(sorting);
  return (
    <div>
      <label>Select by :</label>
      <select title="Price" onChange={sortHandler}>
        <option value="price">Cheapest first</option>
        <option value="time">Fastest first</option>
      </select>
    </div>
  );
};
