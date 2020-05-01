import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import InputBase from "./InputBase";
import { Search, ChevronDown } from "./Icons";

import data from "../../MOCK_DATA.json";
import styled, { css } from "styled-components";
import { useClientRect } from "../hooks/useClientRect";

const Wrapper = styled.div`
  position: relative;
`;

const ResultContainer = styled.div`
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

const ResultItem = styled.div`
  line-height: 30px;
  cursor: pointer;
  padding: 10px 16px;
  margin: 0;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const SearchForm = (props) => {
  const [list, setList] = useState(null);
  const [input, setInput] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [open, setOpen] = useState(false);
  const [boxDirection, setBoxDirection] = useState("down");

  const [rect, ref] = useClientRect();

  useEffect(() => {
    const include = (text) => (text.slice(0, -1) ? text.slice(0, -1) : text);

    const filteredList = data
      .filter((item) => item.name && item.name.includes(include(input)))
      .sort((a, b) => (a.name > b.name ? 1 : -1));

    setList(filteredList);
  }, [input]);

  useEffect(() => {
    if (!rect) return;

    if (rect.bottom + 300 < window.innerHeight || rect.top < 300) {
      setBoxDirection("down");
    } else {
      setBoxDirection("up");
    }

    isFocus ? setOpen(true) : setOpen(false);
  }, [isFocus]);

  return (
    <Wrapper
      ref={ref}
      onBlur={(e) => {
        e.stopPropagation();
        setIsFocus(false);
      }}
    >
      <InputBase
        value={input}
        onFocus={() => setIsFocus(true)}
        onChange={(e) => setInput(e.target.value)}
        leftIcon={<Search />}
        rightIcon={<ChevronDown />}
        label="Contact"
        placeholder="Type or search"
        {...props}
      />
      {open && list && (
        <ResultContainer dir={boxDirection}>
          {list.length ? (
            list.map((item, i) => (
              <ResultItem key={i} onClick={() => setInput(item.name)}>
                {item.name}
              </ResultItem>
            ))
          ) : (
            <ResultItem>No result!</ResultItem>
          )}
        </ResultContainer>
      )}
    </Wrapper>
  );
};

SearchForm.propTypes = {};

export default SearchForm;
