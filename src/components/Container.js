import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  max-width: 1100px;
`;

const Container = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
