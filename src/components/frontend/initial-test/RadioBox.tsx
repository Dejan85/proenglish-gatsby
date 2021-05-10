import React from 'react';

const RadioBox = ({ value, text, name, onChange, checkedProp }) => (
  <>
    <input
      className="initialTest__radio"
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      style={{ height: '1.3rem', width: '1.3rem' }}
      checked={checkedProp}
    />
    <p className="initialTest__p">{text}</p>
  </>
);

export default RadioBox;
