import React from 'react';

const CollapseContent = ({ status, content }) => {
  if (status === 'closed') {
    return false;
  }
  return (
    <div className="content">
      {content}
    </div>
  );
};

export default CollapseContent;
