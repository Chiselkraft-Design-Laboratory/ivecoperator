import React from "react";

let UpArrowIcon = (props) => {
  // let cH = props.size ? props.size * (16 / 14) : 16;
  return (
    <svg
      version="1.1"
      id="up-arrow-icon"
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
        d="M3 3.556V8h2V3.556h3L4 0 0 3.556z"
      />
    </svg>
  );
};
UpArrowIcon = React.memo(UpArrowIcon);
UpArrowIcon.displayName = "UpArrowIcon";
UpArrowIcon.muiName = "SvgIcon";

export default UpArrowIcon;
