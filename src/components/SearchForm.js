import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import InputBase from "./InputBase";
import { Search, ChevronDown } from "./Icons";

import data from "../../MOCK_DATA.json";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const ResultContainer = styled.div`
  position: absolute;
  border: 1px solid #bfc5cd;
  border-radius: 7px;
  box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);
  background-color: #ffffff;
  padding-top: 16px;
  padding-bottom: 16px;
  max-height: 300px;
  overflow-y: auto;
  transform: translateY(5px);
  z-index: 1;
  left: 0%;
  right: -30px;

  & > div {
    line-height: 30px;
    cursor: pointer;
    padding: 10px 16px;

    &:hover {
      background-color: #f7f7f7;
    }
  }
`;

const SearchForm = (props) => {
  const [list, setList] = useState(null);
  const [input, setInput] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    const include = (text) => (text.slice(0, -1) ? text.slice(0, -1) : text);

    const filteredList = data
      .filter((item) => item.name && item.name.includes(include(input)))
      .sort((a, b) => (a.name > b.name ? 1 : -1));

    setList(filteredList);
  }, [input]);

  return (
    <Wrapper
      onBlur={(e) => {
        e.stopPropagation();
        setTimeout(() => {
          setIsFocus(false);
        }, 200);
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
      />
      {isFocus && list && (
        <ResultContainer>
          {list.length ? (
            list.map((item, i) => (
              <div key={i} onClick={() => setInput(item.name)}>
                {item.name}
              </div>
            ))
          ) : (
            <div>No result!</div>
          )}
        </ResultContainer>
      )}
    </Wrapper>
  );
};

SearchForm.propTypes = {};

export default SearchForm;
