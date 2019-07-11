import React from 'react';
import './loading.css';

const Loading = () => {
  return (
    <div className="lms-loading">
      <svg
        className="circular"
        viewBox="25 25 50 50"
      >
        <circle
          className="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Loading;
