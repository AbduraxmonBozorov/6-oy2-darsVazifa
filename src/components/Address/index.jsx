import React from 'react'

function Address(props) {
    const {data} = props;
  return (
    <div>
      <p>Region: {data.region}</p>
      <p>Zip-Code: {data.zip}</p>
    </div>
  )
}

export default Address;
