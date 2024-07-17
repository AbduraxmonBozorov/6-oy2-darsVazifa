import React from 'react'
import data from "./assets/data.json";
import UserList from './components/UserList';

function App() {
  return (
    <div className='container my-3'>
      <UserList data={data.data} />
    </div>
  )
}

export default App;
