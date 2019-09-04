import React, { useRef, createContext } from "react";
import useAbortableFetch from "use-abortable-fetch";
import Toggle from "./Toggle";
import { useTitleInput } from "./hooks/useTitleInput";
import styled from "styled-components";

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();
  const { data } = useAbortableFetch(
    "https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes"
  );
  if (!data) return null;

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1>React Hooks</h1>
        <Toggle />
        <form
          style={{
            margin: "20px auto",
            display: "flex",
            justifyContent: "space-evenly"
          }}
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <MyInput
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <button>Submit</button>
        </form>
        {data.map((dish, idx) => (
          <article key={idx} className="dish-card dish-card--withImage">
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <div className="ingredients">
              {dish.ingredients.map((ingredient, idx) => (
                <span key={idx}>{ingredient}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </UserContext.Provider>
  );
};

export default App;

const MyInput = styled.input`
  width: 300px;
  height: 38px;
  border: none;
  padding: none;
  outline: none;
  border-radius: 4px;
`;
