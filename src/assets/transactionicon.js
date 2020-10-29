import React from "react";

let TransactionIcon = (props) => {
  let cH = props.size ? props.size * (16 / 14) : 16;
  return (
    <svg
      version="1.1"
      id="transaction-icon"
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
        d="M13 0H1a.945.945 0 00-1 1v15l3-2 2 2 2-2 2 2 2-2 3 2V1a.945.945 0 00-1-1zm-2 10H3V8h8zm0-4H3V4h8z"
      />
    </svg>
  );
};
TransactionIcon = React.memo(TransactionIcon);
TransactionIcon.displayName = "TransactionIcon";
TransactionIcon.muiName = "SvgIcon";

export default TransactionIcon;
