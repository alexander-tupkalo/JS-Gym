import { useRef } from 'react';

function CodeEditor({ code, onChange }) {
  const lines = code.split('\n');
  const linesRef = useRef(null);

  const handleScroll = (e) => {
    if (linesRef.current) {
      linesRef.current.scrollTop = e.target.scrollTop;
    }
  };

  return (
    <div className="editor">
      <div className="editor-tab">solution.js</div>
      <div className="editor-body">
        <div className="editor-lines" ref={linesRef}>
          {lines.map((_, i) => (
            <div key={i} className="editor-line-number">
              {i + 1}
            </div>
          ))}
        </div>
        <textarea
          className="editor-textarea"
          value={code}
          onChange={(e) => onChange(e.target.value)}
          onScroll={handleScroll}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
    </div>
  );
}

export default CodeEditor;