
export default function Square({ value, onSquareClick, position }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      aria-label={`Square ${position}: ${value || 'empty'}`}
    >
      {value}
    </button>
  );
}
