import React from 'react'
import modalStyles from "./modalStyle"
import { withStyles } from '@material-ui/core';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind( this );
  }

  onClose(e) {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    const { classes } = this.props;

    if (!this.props.show) {
      return null;
    }
    return (
      <div className={classes.modal}>
        <h2 className={classes.h2}>Modal Window</h2>
        <div
          style={{padding: '1rem'}}
        >
          {this.props.children}</div>

        <div className={classes.actions}>

          <button className={classes.button} onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}

Modal = withStyles( modalStyles )(Modal);
export default Modal