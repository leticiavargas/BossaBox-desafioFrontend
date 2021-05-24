import React from 'react';
import {Button} from '../index';

import './style.css';


const Modal = ({ className = '', contentClassName = '', visible = false, children, onClose, ...otherProps }) => {
  return(
    <div className={`modal ${className} ${visible ? 'visible' : ''}`} { ...otherProps }>
     
      <div className={`contentContainer ${contentClassName}`}>
      <span className="closeElement" onClick={onClose}>
        <i className="fa fa-closeicon" />
      </span>
        { children }
      </div>
    </div>
  );
}

const ModalSmall = ({ contentClassName ='', title, text, cancelTitle, onCancel, confirmTitle, confirmDisabled, onConfirm, children, ...otherProps }) => {
  return(
    <Modal contentClassName={`small ${contentClassName}`}  { ...otherProps }>
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


const ModalPrimary = ({ contentClassName ='', title, text, cancelTitle, onCancel, confirmTitle, confirmDisabled, onConfirm, children, ...otherProps }) => {
  return(
    <Modal contentClassName={`primary ${contentClassName}`}  { ...otherProps }>
      <div className="rectangle"> </div>
      {!!(title && title.length) && <h2>{title}</h2>}
      {!!(text && text.length) && <p>{text}</p>}

      { children }

      <div className="actionContainer primary">
        { !!onConfirm && <Button className="largeButton" title={confirmTitle} disabled={confirmDisabled} onClick={onConfirm} /> }
        { !!onCancel && <Button className="largeButton quartiary" title={cancelTitle} onClick={onCancel} /> }
      </div>
    </Modal>
  );
}

export {
  Modal,
  ModalPrimary,
  ModalSmall
};