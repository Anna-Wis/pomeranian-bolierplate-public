import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  increment,
  decriment,
  reset,
  incrementByValue,
} from '../../../../store/slices/counterSlice';

export const Excercise = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const [inputValue, setInputValue] = useState(0);

  const handleAdd = () => dispatch(increment());
  const handleDec = () => dispatch(decriment());
  const handleReset = () => dispatch(reset());
  const handleIncrementByValue = () => dispatch(incrementByValue(inputValue));

  return (
    <div>
      <h2>Ćwiczenie związane z Redux Counter</h2>
      <div>
        <div>{count}</div>
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleDec}>DEC</button>
        <button onClick={handleReset}>RESET</button>
        <button onClick={handleIncrementByValue}>ADD WITH</button>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </div>
    </div>
  );
};
