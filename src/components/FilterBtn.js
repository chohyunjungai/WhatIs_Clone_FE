import React from "react";
import styled from "styled-components";

export default function FilterBtn({
  children,
  subTabData,
  clicked,
  menuIdx,
  isDropDownView,
}) {
  return (
    <>
      <FilterBtnStyled onClick={clicked}>{children}</FilterBtnStyled>
    </>
  );
}

const FilterBtnStyled = styled.button`
  position: relative;
  width: auto;
  padding: 0px 15px 0px 8px;
  margin-right: 12px;
  height: 34px;
  border: none;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 4px;
  color: #555555;
  background-color: white;
  font-size: 15px;
  line-height: 34px;
  outline: none;

  img {
    width: 15px;
    margin-left: 10px;
    padding-top: 10px;
  }
`;
