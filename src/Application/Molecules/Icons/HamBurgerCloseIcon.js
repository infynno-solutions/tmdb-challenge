import React from "react";

export const HamBurgerCloseIcon = (props) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="18" cy="18" r="18" fill="#BE123C" />
      <path d="M11 11L25 25" stroke="white" strokeWidth="2" />
      <path d="M11 25L25 11" stroke="white" strokeWidth="2" />
    </svg>
  );
};
