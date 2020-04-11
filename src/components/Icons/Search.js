import React from "react";
import PropTypes from "prop-types";

export const Search = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4-4" />
    </svg>
  );
};

Search.defaultProps = {
  size: 24,
};

Search.propTypes = {
  size: PropTypes.number,
};

export default Search;
