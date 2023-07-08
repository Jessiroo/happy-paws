import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

// BACKDROP
const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose} />
  );
};

// MODAL OVERLAY
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      {props.children}
    </div>
  );
};

// PORTAL
const portal = document.getElementById('overlays');

// MODAL COMPONENT
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portal)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>, portal
      )}
    </Fragment>
  );
};

export default Modal;