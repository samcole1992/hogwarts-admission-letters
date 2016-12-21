/* jshint esversion: 6 */
import React from 'react';

const Form = props => {

  return(
    <div>
      <form>
        <input type = "text" placeholder = "Hey" onChange = {props.handleAddresseeInput}/>
        <button onClick = {props.handleAcceptedClick}>I accept you</button>
        <button onClick = {props.handleRejectedClick}>NO</button>

      </form>
    </div>
  )
}

export default Form;
