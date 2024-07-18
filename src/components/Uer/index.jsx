import React from 'react';
import "./index.css";
import Address from '../Address';
import Car from '../Car';

function User(props) {
  const {data} = props;
  return (
    <div className='col-12 col-sm-6 col-md-4'>
      <div className="card">
        <img src={data.image} alt="" className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title row">
            <span className='col-6 text-truncate'>{data.firstName}</span>
            <span className='col-6 text-truncate'>{data.lastName}</span>
          </h2>
          <div className="row my-3">
            <p className="col-6">{data.phone}</p>
            <p className="col-6">{data.email}</p>
          </div>
          <Address data={data.address} />
          <div>
            {
            data.cars.map((val, ind)=>{
              // console.log(val);
               return <Car key={ind} data={val} />
            })
          }
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default User;
