import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      if (state.count < 20) {
        return { count: state.count + 1 };
      } else {
        return { count: state.count + 5 };
      }
    case "minus":
      if (state.count > 0) {
        return { count: state.count - 1 };
      } else {
        return state;
      }

    default:
      return state;
  }
}

const initialState = {
  count: 0,
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const decrementHandler = () => {
    dispatch({ type: "minus" });
  };

  const incrementHandler = () => {
    dispatch({ type: "plus" });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={incrementHandler}>increment +</button>
      {}
      <button onClick={decrementHandler} disabled={state.count === 0}>
        decrement -
      </button>
    </div>
  );
};
