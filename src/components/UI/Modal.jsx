import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Overlay = props => {
  return <div className={classes.modal}>{props.children}</div>;
};

const parentElement = document.getElementById('overlay');

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        parentElement
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        parentElement
      )}
    </>
  );
};

export default Modal;
