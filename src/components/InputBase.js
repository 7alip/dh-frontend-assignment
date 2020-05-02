import React, { useRef } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const FormField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-left: ${({ leftIcon }) => leftIcon && "3rem"};
  border: 1px solid #bfc5cd;
  appearance: none;
  border-radius: 7px;
  background-color: transparent;

  &:hover,
  &:focus {
    border-color: #4a4a4a;
  }

  &::placeholder {
    transition: inherit;
    transform: translateX(5px);
    color: #bfc5cd;
  }

  &::placeholder,
  & ~ .icon--prefix {
    opacity: 0;
  }

  & ~ .icon--prefix {
    transition: opacity 0.3 ease-in-out;
    left: 16px;
    cursor: text;
  }

  & ~ .icon--suffix {
    right: 16px;
    cursor: pointer;
  }

  & ~ .icon--prefix,
  & ~ .icon--suffix {
    position: absolute;
    top: 45%;
    font-size: 16px;
    color: gray;
    transition: all 0.3s ease-out;
  }

  &,
  & + label {
    transition: all 0.3s ease-out;
    touch-action: manipulation;
    cursor: text;
  }

  & + label {
    width: max-content;
    color: #798697;
  }

  &:placeholder-shown + label {
    transform-origin: left bottom;
    transform: translate(16px, 35px) scale(1);
  }

  &:not(:placeholder-shown),
  &:focus {
    & + label {
      transform: translate(7px, 0) scale(1);
      cursor: pointer;
    }

    &::placeholder {
      transform: translateX(0);

      opacity: ${({ placeholder }) => (placeholder ? 1 : 0)};
    }

    & ~ .icon--prefix {
      opacity: 1;
    }
  }
`;

const InputBase = (props) => {
  return (
    <FormField>
      <StyledInput
        ref={props.ref}
        id={props.id || "search"}
        value={props.value}
        {...props}
      />
      {props.label && (
        <label htmlFor={props.id || "search"}>{props.label}</label>
      )}
      {props.leftIcon && <span className="icon--prefix">{props.leftIcon}</span>}
      {props.rightIcon && (
        <span onClick={() => inputRef.current.focus()} className="icon--suffix">
          {props.rightIcon}
        </span>
      )}
    </FormField>
  );
};

InputBase.defaultProps = {
  placeholder: " ",
};

InputBase.propTypes = {
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

export default InputBase;
