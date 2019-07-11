import React from "react";

const CollapseHeader = ({ title = "sem título", opened, handleClick, id }) => (
  <div className="header" onClick={() => handleClick(id)}>
    <span className={opened ? "icon opened" : "icon"}>&nbsp;</span>
    <span>{title}</span>
  </div>
);

export default CollapseHeader;
