import React, { createContext, useContext, useReducer } from 'react';

// 1. Define a Context
const CounterContext = createContext();

// 2. Define a Reducer
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

// 3. Create a Provider Component
function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

// 4. Component to Display Count
function DisplayCount() {
  const { state } = useContext(CounterContext);
  return <p>Count: {state.count}</p>;
}

// 5. Component to Modify Count
function CounterControls() {
  const { dispatch } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

// 6. Combine Component
function Combine() {
  return (
    <CounterProvider>
      <DisplayCount />
      <CounterControls />
    </CounterProvider>
  );
}

export default Combine;
