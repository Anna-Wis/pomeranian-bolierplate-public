import { useState } from 'react';

export function Rep() {
  return (
    <div>
      <ReactRepetition />
      <ReactOnChange />
    </div>
  );
}

export function ReactRepetition() {
  const [text, setText] = useState('Który przycisk był kliknięty?');

  function handleClick(event) {
    setText(event.target.innerHTML);
  }

  return (
    <div>
      <h2>Test umiejętności</h2>
      <button onClick={handleClick}>Kliknij mnie</button>
      <button onClick={handleClick}>Nie klikaj tu</button>
      <p>Jest to przycisk:</p>
      <p>{text}</p>
    </div>
  );
}

function ReactOnChange() {
  const [name, setNAme] = useState('');

  function handleChange(event) {
    setNAme(event.target.value);
  }
  return (
    <div>
      <h2>Nowe ćwiczenie</h2>
      <div>
        <input
          type="text"
          placeholder="Wpisz swoje imię"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>Moje imię to: {name}</div>
    </div>
  );
}
