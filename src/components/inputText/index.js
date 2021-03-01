import React from 'react';

import './style.css';


const InputText = ({title, required, error, placeholder, ...otherProps }) => {

  return(
    <div className="inputContainer">
      <div className="inputTitle">{title} {!!required && (<span>*</span>)} </div>
      <input placeholder={placeholder} { ...otherProps} />
    </div>
  );
};

const TextAreaInput = ({title, required, numRows = 3, ...otherProps }) => {
  return (
    <div className="inputContainer">
      {title && (  
        <div className="inputTitle">{title}</div>
      )}
      <textarea  rows={numRows}  { ...otherProps }/>
    </div>
  );
};

export {InputText, TextAreaInput}