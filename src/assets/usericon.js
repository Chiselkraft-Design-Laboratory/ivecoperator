import React from "react";

let UserIcon = (props) => {
  let cH = props.size ? props.size * (16 / 14) : 16;
  return (
    <svg
      version="1.1"
      id="user-icon"
      viewBox="0 0 14 16"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 14}
      height={cH}
      className={props.className}
    >
      <path
        fill={props.color || "inherit"}
        d="M0 16a6.018 6.018 0 016-6h2a6.018 6.018 0 016 6zm2.6-2h8.9A4.033 4.033 0 008 12H6.1a4.035 4.035 0 00-3.5 2zM3 5V4a4 4 0 018 0v1a4 4 0 11-8 0zm2-1v1a2 2 0 104 0V4a2 2 0 00-4 0z"
      />
    </svg>
  );
};
UserIcon = React.memo(UserIcon);
UserIcon.displayName = "UserIcon";
UserIcon.muiName = "SvgIcon";

export default UserIcon;
