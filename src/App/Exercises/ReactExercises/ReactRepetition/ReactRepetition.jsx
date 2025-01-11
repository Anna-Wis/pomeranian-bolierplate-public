export function ReactRepetition() {
  function handleClick() {
    console.log('tets123');
  }
  return (
    <div>
      <h2>Test umiejętności</h2>
      <button onClick={handleClick}>Kliknij mnie</button>
    </div>
  );
}
