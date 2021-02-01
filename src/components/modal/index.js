import React from 'react';
import {Button} from '../button';

import './style.css';


const Modal = ({ className = '', contentClassName = '', visible = false, children, ...otherProps }) => {
  return(
    <div className={`modal ${className} ${visible ? 'visible' : ''}`} { ...otherProps }>
      <div className={`contentContainer ${contentClassName}`}>
        { children }
      </div>
    </div>
  );
}

const AlertModal = ({ contentClassName ='', title, text, cancelTitle, onCancel, confirmTitle, confirmDisabled, onConfirm, children, ...otherProps }) => {
  return(
    <Modal contentClassName={`alert ${contentClassName}`}  { ...otherProps }>
      {!!(title && title.length) && <h2>{title}</h2>}
      {!!(text && text.length) && <p>{text}</p>}

      { children }

      <div className="actionContainer">
        { !!onCancel && <Button className="danger" title={cancelTitle} onClick={onCancel} /> }
        { !!onConfirm && <Button className="largeButton" title={confirmTitle} disabled={confirmDisabled} onClick={onConfirm} /> }
      </div>
    </Modal>
  );
}

export {
  Modal,
  AlertModal
};