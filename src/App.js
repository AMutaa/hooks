import React, { useState } from 'react';
import Toggle from './Toggle'

const App = () => {

  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');


  return (
    <div className="main-wrapper">
      <h1>React Hooks</h1>
      <Toggle />
      <form onSubmit={(e) => {
        e.preventDefault();
        formSubmit(name, setName);
      }}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <button>Submit</button>
      </form>

    </div>
  );
};


// form Submit function to be called onSubmit, value can be used while setValue is going to clear the input field
const formSubmit = (value, setValue) => {
  console.log('email sent to ' + value + '!');
  setValue('')
}
export default App;
