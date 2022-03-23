import './App.css';
import Modal from './component/modal';
import modalStyles from './component/modalStyle';
import React from 'react';
import { withStyles } from '@material-ui/core';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind( this );
  }

  showModal(e) {
    this.setState({ show: !this.state.show})
  }


  render() {

    const { classes } = this.props;

    return (
      <div className='App'>
        <h1>Custom Modal Prototype</h1>
        <div className={classes.body}>
          <Modal
            onClose={this.showModal}
            show={this.state.show}
          >
            Message Prop Passed on From Father Component
          </Modal>
          {!this.state.show ?
            <button
              className={classes.button}
              onClick={e => {
                this.showModal()
              }}
            >
            show Modal
          </button>
        : null }

        </div>
      </div>
    )
  }
}

App = withStyles( modalStyles )(App);
export default App

