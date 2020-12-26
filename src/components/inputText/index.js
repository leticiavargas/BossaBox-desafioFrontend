import React from 'react';

import './style.css';


const InputText = ({title, required, error, placeholder}) => {

  return(
    <div className="inputContainer">
      <div className="inputTitle">{title} {!!required && (<span>*</span>)} </div>
      <input placeholder={placeholder} />
    </div>
  );
}

export {InputText}