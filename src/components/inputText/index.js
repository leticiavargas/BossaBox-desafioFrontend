import React from 'react';
import './style.css';

const InputText = ({title, required, error, placeholder, ...otherProps }) => {
  return(
    <div data-testid='inputText' className="inputContainer">
      <label className="inputTitle">{title}{!!required && (<span>*</span>)}</label>
      <input placeholder={placeholder} { ...otherProps} />
    </div>
  );
};

const TextAreaInput = ({title, required, numRows = 3, ...otherProps }) => {
  return (
    <div data-testid='textAreaInput' className="inputContainer">
      {title && (  
        <label className="inputTitle">{title}{!!required && (<span>*</span>)}</label>
      )}
      <textarea data-testid='textArea'  rows={numRows}  { ...otherProps }/>
    </div>
  );
};

export {InputText, TextAreaInput}