import React, { useState, useEffect } from 'react';
import Toggle from './Toggle'

const App = () => {

  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = name;
  })


  return (
    <div className="main-wrapper">
      <h1>React Hooks</h1>
      <Toggle />
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <button>Submit</button>
      </form>

    </div>
  );
};

export default App;
