/* jshint esversion: 6 */

import React, { Component } from 'react';
import Form from './Form';
import Letter from './Letter';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      accepted: true,
      addressee: "addressee"
    };
    this.handleAcceptedClick = this.handleAcceptedClick.bind(this);
    this.handleRejectedClick = this.handleRejectedClick.bind(this);
    this.handleAddresseeInput = this.handleAddresseeInput.bind(this);
  }

  handleAddresseeInput(event){
    this.setState({
      addressee: event.target.value
    });
    console.log(this.state.addressee);
  }

  handleAcceptedClick(event){
    event.preventDefault();
    this.setState({
      accepted: true
    });
  }
  handleRejectedClick(event){
    event.preventDefault();
    this.setState({
      accepted: false
    });
  }
  render(){
    return(
      <div>
        <Form
        handleAddresseeInput = {this.handleAddresseeInput}
        handleAcceptedClick = {this.handleAcceptedClick}
        handleRejectedClick = {this.handleRejectedClick}
        />
        <Letter
        addressee = {this.state.addressee}
        accepted = {this.state.accepted}
        />


      </div>
    );
  }
}
export default App;
