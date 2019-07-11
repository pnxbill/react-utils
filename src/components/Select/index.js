import React from 'react';
import './select.css';

const Select = () => {
  return (
    <div className="lms-select-container">
      <div className="lms-select">
        <div className="lms-input">
          <input
            type="text"
            placeholder="Select"
            readOnly
          />
          <span className="icon">
            &nbsp;
          </span>
        </div>
      </div>
      <div className="lms-dropdown">
        <ul>
          <li>teste</li>
          <li>teste2</li>
          <li className="selected">teste3</li>
          <li>teste4</li>
        </ul>
      </div>
    </div>
  );
};

export default Select;
