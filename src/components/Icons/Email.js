import React from "react";
import PropTypes from "prop-types";

export const Email = (props) => {
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
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
};

Email.defaultProps = {
  size: 24,
};

Email.propTypes = {
  size: PropTypes.number,
};

export default Email;
