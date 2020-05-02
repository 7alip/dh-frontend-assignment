import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import InputBase from "./InputBase";
import Dropdown from "./Dropdown";
import { Search, ChevronDown } from "./Icons";

import data from "../../MOCK_DATA.json";
import styled, { css } from "styled-components";
import { useClientRect } from "../hooks/useClientRect";

const Wrapper = styled.div`
  position: relative;
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
        {...props}
      />
      {open && list && (
        <Dropdown
          setInput={(name) => setInput(name)}
          list={list}
          dir={boxDirection}
        />
      )}
    </Wrapper>
  );
};

SearchForm.propTypes = {};

export default SearchForm;
