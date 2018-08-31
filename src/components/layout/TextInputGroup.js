// functional component
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name,
  value,
  placeHolder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className={classnames('form-control  form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

TextInputGroup.protTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProp = {
  type: 'text'
};

export default TextInputGroup;
