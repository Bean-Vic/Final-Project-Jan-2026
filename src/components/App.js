// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'src/reducers/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
      <div>
        <h1>Counter: {count}</h1>

        <button onClick={() => dispatch({ type: 'counter/asyncIncrement' })}>
          Async +1 (via Saga)
        </button>
        <button onClick={() => dispatch({ type: 'counter/asyncDecrement' })}>
          Async -1 (via Saga)
        </button>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
      </div>
  );
}

export default App;
