import React from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  position: absolute;
  border: 1px solid #bfc5cd;
  border-radius: 7px;
  box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);
  background-color: #ffffff;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1;
  left: 0;
  right: 0;
  ${(props) =>
    props.dir === "down"
      ? css`
          top: 75px;
        `
      : css`
          bottom: 75px;
        `}
`;

const StyledItem = styled.div`
  line-height: 30px;
  cursor: pointer;
  padding: 10px 16px;
  margin: 0;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const Drp = (props) => (
  <StyledWrapper dir={props.dir || "down"}>
    {props.list.length ? (
      props.list.map((item, i) => (
        <StyledItem
          className="item"
          key={i}
          onClick={() => props.setInput(item.name)}
        >
          {item.name}
        </StyledItem>
      ))
    ) : (
      <StyledItem>No result!</StyledItem>
    )}
  </StyledWrapper>
);

export default Drp;
