import React from "react";

let DownArrowIcon = (props) => {
  // let cH = props.size ? props.size * (16 / 14) : 16;
  return (
    <svg
      version="1.1"
      id="down-arrow-icon"
      viewBox="0 0 8 8"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 8}
      height={props.size || 8}
      className={props.className}
    >
      <path
        fill={props.color || "inherit"}
        d="M5 4.444V0H3v4.444H0L4 8l4-3.556z"
      />
    </svg>
  );
};
DownArrowIcon = React.memo(DownArrowIcon);
DownArrowIcon.displayName = "DownArrowIcon";
DownArrowIcon.muiName = "SvgIcon";

export default DownArrowIcon;
