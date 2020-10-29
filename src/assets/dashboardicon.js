import React from "react";

let DashboardIcon = (props) => {
  let cH = props.size ? props.size * (16 / 14) : 16;
  return (
    <svg
      version="1.1"
      id="dashboard-icon"
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
        d="M11.375 16a.891.891 0 01-.876-1V6a.891.891 0 01.876-1h1.75A.891.891 0 0114 6v9a.891.891 0 01-.875 1zm-5.25 0a.891.891 0 01-.875-1V1a.891.891 0 01.875-1h1.75a.891.891 0 01.875 1v14a.891.891 0 01-.875 1zm-5.25 0A.891.891 0 010 15v-4a.892.892 0 01.875-1h1.75a.892.892 0 01.875 1v4a.891.891 0 01-.876 1z"
      />
    </svg>
  );
};
DashboardIcon = React.memo(DashboardIcon);
DashboardIcon.displayName = "DashboardIcon";
DashboardIcon.muiName = "SvgIcon";

export default DashboardIcon;
