import React, { useState, useEffect, useRef, createContext } from 'react';
import Toggle from './Toggle'
import { useTitleInput } from './hooks/useTitleInput'
import Counter from './Counter'


export const UserContext = createContext();

const App = () => {

  const [name, setName] = useTitleInput('');
  const ref = useRef()
  console.log('ref:', ref.current);

  const [dishes, setDishes] = useState([])
  const fetchDishes = async () => {
    console.log('ran')
    const res = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes')
    const data = await res.json();
    setDishes(data)

  }


  // second parameter [] : runs this only on mount
  useEffect(() => {
    fetchDishes()
  }, [])
  // something to determine when the useEffect runs, put it in the array ie line 30:  }, [name])

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1>React Hooks</h1>
        <Toggle />
        {/* <Counter /> */}
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
          <button>Submit</button>
        </form>
        {dishes.map(dish => (
          <article className='dish-card dish-card--withImage'>
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <div className="ingredients">
              {dish.ingredients.map((ingredient) => (
                <span>{ingredient}</span>))}
            </div>
          </article>
        ))}

      </div>
    </UserContext.Provider>
  );
};

export default App;


// useRef ... attach ref to a DOM element