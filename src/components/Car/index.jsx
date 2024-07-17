import React from 'react';
import "./index.css";

export default function Car(props) {
  const {data} = props;
  console.log(data);
  return (
      <span className="me-3">{data},</span>
  )
}
