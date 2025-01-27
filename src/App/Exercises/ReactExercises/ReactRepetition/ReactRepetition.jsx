import { useState } from 'react';
import './style.css';

export function Rep() {
  return (
    <div>
      <ReactRepetition />
      <ReactOnChange />
      <IfStatement />
      <ReactGuessNumber />
    </div>
  );
}

export function ReactRepetition() {
  const [text, setText] = useState('');

  function handleClick(event) {
    setText(event.target.innerHTML);
  }

  return (
    <div>
      <h2 className="h2-rep">Test onClick'a</h2>
      <button className="button-rep" onClick={handleClick}>
        Kliknij mnie
      </button>
      <button className="button-rep" onClick={handleClick}>
        Nie klikaj tu
      </button>
      <p>Który przycisk był kliknięty?</p>
      <p>Kliknięto przycisk:</p>
      <p>{text}</p>
    </div>
  );
}

function ReactOnChange() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <h2 className="h2-rep">Test onChange'a</h2>
      <div>
        <input
          className="input-rep"
          type="text"
          data-test-id="abc"
          placeholder="Wpisz swoje imię"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>Moje imię to: {name}</div>
    </div>
  );
}

function IfStatement() {
  const [text, setText] = useState('Nie kliknięto przycisku');
  const [clickedCount, setClickedCount] = useState(0);

  function handleClick2() {
    const newclickedCount = clickedCount + 1;
    setClickedCount(newclickedCount);
    setClickedCount(clickedCount + 1);
    // setText('Kliknięto przycisk:');

    if (newclickedCount > 10) {
      setText('Kliknięto przycisk więcej niż 10 razy, liczymy od nowa');
      setClickedCount(0);
    } else {
      setText('Kliknięto przycisk!');
    }
  }

  return (
    <div>
      <h2 className="h2-rep"> Test if statement</h2>
      <button onClick={handleClick2}>Nowy przycisk</button>
      <p className="text">{text}</p>

      {clickedCount > 0 && (
        <p className="number">Liczba kliknięć: {clickedCount}</p>
      )}
    </div>
  );
}

function ReactGuessNumber() {
  return (
    <div>
      <h2 className="h2-rep">Zadanie ze zgdaywaniem liczb</h2>
    </div>
  );
}
