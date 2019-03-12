import React from 'react';
import Toggle from './Toggle'
import { useTitleInput } from './hooks/useTitleInput'

const App = () => {

  const [name, setName] = useTitleInput('');

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
