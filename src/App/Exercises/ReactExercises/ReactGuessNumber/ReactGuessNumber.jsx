import { useState } from 'react';
import './style.css';

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export function ReactGuessNumber() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [inputNumber, setInputNumber] = useState();
  const [text, setText] = useState('Wpisz liczbę i kliknij start');

  function handleChange(event) {
    setInputNumber(event.target.value);
  }

  function handleReset() {}

  function handleStart() {
    console.log(randomNumber, 'random number');
    if (inputNumber > randomNumber) {
      setText('Jestem mniejsza');
    }
    if (inputNumber < randomNumber) {
      setText('Jestem większa');
    }
    if (inputNumber == randomNumber) {
      setText('Gratulacje trafiłeś/aś!');
    }
  }

  return (
    <div>
      <h1>Jaką jestem liczbą?</h1>
      <button onClick={handleStart}>start</button>
      <div>
        <input
          placeholder="Wpisz dowolną liczbę"
          type="number"
          value={inputNumber}
          onChange={handleChange}
        />
      </div>
      <p>{text}</p>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
