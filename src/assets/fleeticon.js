import React from "react";

let FleetIcon = (props) => {
  let cH = props.size ? props.size * (16 / 14) : 16;
  return (
    <svg
      version="1.1"
      id="fleet-icon"
      viewBox="0 0 14 16"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 14}
      height={cH}
      className={props.className}
    >
      <path fill="none" d="M0 0h14v16H0z" />
      <path
        fill={props.color || "inherit"}
        d="M6.968 10.351a1.435 1.435 0 00-1.454 1.4v2.844a1.455 1.455 0 002.909 0v-2.841a1.435 1.435 0 00-1.455-1.403z"
      />
      <path
        fill={props.color || "inherit"}
        d="M12.246 1.755h-2.8a2.624 2.624 0 00-4.952 0H1.727a.7.7 0 100 1.4h2.8a2.437 2.437 0 001.129 1.4 4.632 4.632 0 00-3.422 4.388v3.683a1.188 1.188 0 001.2 1.157h.981v-2a2.585 2.585 0 015.166 0v2h.979a1.188 1.188 0 001.2-1.157V8.983a4.6 4.6 0 00-3.422-4.388 2.45 2.45 0 001.129-1.4h2.8a.715.715 0 00.727-.7.768.768 0 00-.748-.74zM6.969 3.9a1.4 1.4 0 111.454-1.4 1.391 1.391 0 01-1.454 1.4z"
      />
    </svg>
  );
};
FleetIcon = React.memo(FleetIcon);
FleetIcon.displayName = "FleetIcon";
FleetIcon.muiName = "SvgIcon";

export default FleetIcon;
