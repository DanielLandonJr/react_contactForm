// functional component
import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({
  label,
  name,
  value,
  placeHolder,
  type,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-control form-control-lg"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextInputGroup.protTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProp = {
  type: 'text'
};

export default TextInputGroup;
