import React from 'react';

function Child(props){
  const {name,changeName} = props;

  return (
      <div>
        <h1>Hello {name}!</h1>
        <button onClick={changeName}>Change Name</button>
      </div>
  )
}

export default Child;