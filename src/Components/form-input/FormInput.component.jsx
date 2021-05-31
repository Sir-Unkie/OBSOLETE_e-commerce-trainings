import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({ changeHandler, label, id, ...otherProps }) => {
  return (
    <div className='group'>
      <input
        id={id}
        className='form-input'
        onChange={changeHandler}
        {...otherProps}
      ></input>
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
          htmlFor={id}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
