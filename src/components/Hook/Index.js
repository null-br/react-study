import React, { useState } from 'react';

const Index = () => {
  const [age, setAge] = useState('21');
  const [name, setName] = useState('BR');

  return (
    <div>
      <div>
        <p>Name: <input type="text" value={name} onChange={e => setName(e.target.value)} /></p>
        <p>Age: {age}</p>
        <button onClick={() => setAge(age + 1)}>Increment Age By One</button>
      </div>
    </div>
  );
}

export default Index;
