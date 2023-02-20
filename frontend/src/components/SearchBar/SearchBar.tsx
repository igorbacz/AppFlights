import React, { useContext, useState } from "react";
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

// export const StyledSelect = styled.div`
//   width: 180px;
//   height: 48px;
//   background: #008eff 0% 0% no-repeat padding-box;
//   border-radius: 24px;
// `;

export const SearchBar = () => {
  // const [sort, setSort] = useState("Price");
  const appContext: {
    sorting?: string;
    setSorting?: React.Dispatch<React.SetStateAction<string>>;
  } = useContext(FlightsContext);

  const { sorting, setSorting } = appContext;

  const sortHandler = (event: any) => {
    const target = event.target as HTMLInputElement;
    //@ts-ignore
    console.log(target.value);
    //@ts-ignore
    setSorting(target.value);
  };
  console.log(sorting);
  return (
    <div>
      <label>Select by :</label>
      <select title="Price" onClick={sortHandler}>
        <option value="price">Cheapest first</option>
        <option value="time">Fastest first</option>
      </select>
    </div>
  );
};
