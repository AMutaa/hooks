import { useState, useEffect, useDebugValue } from "react";

//custom hook

function useTitleInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    document.title = value;
  });
  useDebugValue(value.length > 0 ? "Full" : "EMPTY");
  return [value, setValue];
}

export { useTitleInput };
