import React from 'react';

const CollapseHeader = ({
  title = 'sem título',
  status,
  handleClick,
  id,
}) => (
  <div
    className="header"
    onClick={() => handleClick(id)}
  >
    <span
      className={status === 'opened' ? 'icon opened' : 'icon'}
    >
      &nbsp;
    </span>
    <span>
      {title}
    </span>
  </div>
);

export default CollapseHeader;
