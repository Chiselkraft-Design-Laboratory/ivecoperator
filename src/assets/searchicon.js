import React from "react";

let SearchIcon = (props) => (
  <svg
    version="1.1"
    id="search-icon"
    viewBox="0 0 512 512"
    x="0"
    y="0"
    preserveAspectRatio="xMidYMid meet"
    width={props.size || 24}
    height={props.size || 24}
  >
    <path
      fill={props.color || "inherit"}
      d="M505.7 475.6L360.1 330c28.2-34.8 45.2-79.1 45.2-127.3C405.3 90.9 314.4 0 202.7 0S0 90.9 0 202.7s90.9 202.7 202.7 202.7c48.2 0 92.5-17 127.3-45.2l145.6 145.6c4.2 4.2 9.6 6.3 15.1 6.3s10.9-2.1 15.1-6.3c8.3-8.4 8.3-21.9-.1-30.2zm-303-112.9c-88.2 0-160-71.8-160-160s71.8-160 160-160 160 71.8 160 160-71.8 160-160 160z"
    />
  </svg>
);
SearchIcon = React.memo(SearchIcon);
SearchIcon.displayName = "SearchIcon";
SearchIcon.muiName = "SvgIcon";

export default SearchIcon;
