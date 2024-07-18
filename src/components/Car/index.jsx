import React from 'react';
import "./index.css";

export default function Car(props) {
  console.log(props);
  return (
      <span className="me-3">{props.data},</span>
  )
}
