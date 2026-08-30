function Hints({ hints, revealedCount }) {
  if (!hints || hints.length === 0 || revealedCount === 0) return null;

  return (
    <div className="hints">
      <div className="hints-list">
        {hints.slice(0, revealedCount).map((hint, i) => (
          <div key={i} className="hint-item">
            <span className="hint-number">{i + 1}</span>
            <span className="hint-text">{hint}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hints;