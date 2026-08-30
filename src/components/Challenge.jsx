import { useState, useEffect } from 'react';
import { categoryNames } from '../data/challenges';
import { runCode } from '../utils/codeRunner';
import { runTests } from '../utils/testRunner';
import CodeEditor from './CodeEditor';
import Result from './Result';
import Hints from './Hints';
import Theory from './Theory';

function Challenge({
  challenge,
  currentPosition,
  totalChallenges,
  isFirst,
  isLast,
  onPrevChallenge,
  onNextChallenge,
  onChallengeComplete,
}) {
  const categoryLabel = categoryNames[challenge.category] || challenge.category;
  const number = String(challenge.id).padStart(2, '0');

  const [code, setCode] = useState(challenge.starterCode);
  const [result, setResult] = useState(null);
  const [hintsRevealed, setHintsRevealed] = useState(0);

  useEffect(() => {
    setCode(challenge.starterCode);
    setResult(null);
    setHintsRevealed(0);
  }, [challenge.id]);

  const handleRun = () => {
    const output = runCode(code);
    setResult({ type: 'run', ...output });
  };

const handleCheck = () => {
  const output = runTests(code, challenge);
  if (output === null) {
    setResult({ type: 'no-tests' });
  } else {
    setResult({ type: 'check', ...output });
    if (output.success) {
      onChallengeComplete(challenge.id);
    }
  }
};

  const totalHints = challenge.hints ? challenge.hints.length : 0;

  return (
    <div className="challenge">
      <div className="challenge-header">
        <div className="challenge-header-top">
          <span className="challenge-category-badge">{categoryLabel}</span>
          <span className="challenge-number">#{number}</span>
        </div>
        <h1 className="challenge-title">{challenge.title}</h1>
      </div>

      <p className="challenge-description">{challenge.description}</p>

      {challenge.instructions && challenge.instructions.length > 0 && (
        <div className="challenge-section">
          <h2 className="challenge-section-title">Інструкція</h2>
          <ol className="challenge-instructions-list">
            {challenge.instructions.map((step, i) => (
              <li key={i} className="challenge-instructions-item">
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}

      {challenge.example && (
        <div className="challenge-section">
          <h2 className="challenge-section-title">Приклад</h2>
          <pre className="challenge-code-block">{challenge.example}</pre>
        </div>
      )}

      {challenge.expectedOutput && (
        <div className="challenge-section">
          <h2 className="challenge-section-title">Очікуваний результат</h2>
          <pre className="challenge-code-block">{challenge.expectedOutput}</pre>
        </div>
      )}

      <Theory theory={challenge.theory} />

      <div className="challenge-editor">
        <CodeEditor code={code} onChange={setCode} />
      </div>

      <div className="challenge-actions">
        <button className="btn-run" onClick={handleRun}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Запустити
        </button>
        <button className="btn-check" onClick={handleCheck}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Перевірити
        </button>
        {totalHints > 0 && (
          <button
            className="btn-hint"
            onClick={() =>
              setHintsRevealed((prev) => Math.min(prev + 1, totalHints))
            }
            disabled={hintsRevealed >= totalHints}
          >
            Підказка
          </button>
        )}
      </div>

      <Hints hints={challenge.hints} revealedCount={hintsRevealed} />

      <Result result={result} />

      <div className="challenge-nav">
        <button
          className="btn-nav"
          onClick={onPrevChallenge}
          disabled={isFirst}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Попереднє
        </button>
        <span className="challenge-nav-position">
          {currentPosition} / {totalChallenges}
        </span>
        <button
          className="btn-nav"
          onClick={onNextChallenge}
          disabled={isLast}
        >
          Наступне
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Challenge;