import React, { useState } from "react";

const [state, setstate] = useState(initialState);

function useState(defaultValue) {
  const setValue = newValue => {
    defaultValue = newValue;
  };
  const customHook = [defaultValue, setValue];
  return customHook;
}
