import { useState } from 'react';

function Theory({ theory }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!theory) return null;

  return (
    <div className="theory">
      <button
        className="theory-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="theory-toggle-label">Міні-теорія</span>
        <svg
          className={`theory-chevron${isOpen ? ' expanded' : ''}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="theory-content">
          <h2 className="theory-title">{theory.title}</h2>
          <p className="theory-text">{theory.content}</p>
          {theory.example && (
            <pre className="theory-code">{theory.example}</pre>
          )}
        </div>
      )}
    </div>
  );
}

export default Theory;