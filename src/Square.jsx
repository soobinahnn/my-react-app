
export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      aria-label={value ? `Square marked ${value}` : 'Empty square'}
    >
      {value}
    </button>
  );
}
