import React, { useRef, createContext } from 'react';
import Toggle from './Toggle'
import { useTitleInput } from './hooks/useTitleInput'
import Counter from './Counter'


export const UserContext = createContext();

const App = () => {

  const [name, setName] = useTitleInput('');
  const ref = useRef()
  console.log('ref:', ref.current);

  return (
    <UserContext.Provider
      value={{
        user: false
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1>React Hooks</h1>
        <Toggle />
        <Counter />
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
          <button>Submit</button>
        </form>
      </div>
    </UserContext.Provider>
  );
};

export default App;


// useRef ... attach ref to a DOM element