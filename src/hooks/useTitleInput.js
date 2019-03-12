import { useState, useEffect } from 'react';


//custom hook

function useTitleInput(initialValue) {
  // const [value, setValue] = useState(initialState)
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    document.title = value;
  })
  return [value, setValue]
}

export { useTitleInput }