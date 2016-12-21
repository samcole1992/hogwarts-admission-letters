/* jshint esversion: 6 */
import React from 'react';

const Letter = props => {

  let body;
  if (props.accepted) {
    body = "You're a wizard Harry"
  }
  else{
    body = "NO"
  }
  return(
    <div>
      <h1>HogWarts</h1>
      <h2>Dear {props.addressee}</h2>
      <p>{body}</p>
      <h3>That Teacher there</h3>
    </div>
  )
}

 export default Letter;
