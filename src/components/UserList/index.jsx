import React from 'react';
import "./index.css";
import User from '../Uer';

function UserList(props) {
  const {data} = props
  return (
    <div className='user-list row gy-3'>
      {data.map((val, ind)=>{
        return <User key={ind} data={val} />
      })}
    </div>
  )
}

export default UserList;
