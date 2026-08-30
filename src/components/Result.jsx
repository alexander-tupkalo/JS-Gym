import { formatValue } from '../utils/codeRunner';

function Result({ result }) {
  if (!result) return null;

  // Run — успех с выводом
  if (result.type === 'run' && result.success) {
    if (result.output.length === 0) {
      return (
        <div className="result result--empty">
          <span className="result-label">Результат</span>
          <span className="result-empty-text">
            Код виконано без виводу
          </span>
        </div>
      );
    }
    return (
      <div className="result result--success">
        <span className="result-label">Результат</span>
        <div className="result-output">
          {result.output.map((line, i) => (
            <div key={i} className="result-line">{line}</div>
          ))}
        </div>
      </div>
    );
  }

  // Run — ошибка
  if (result.type === 'run' && !result.success) {
    return (
      <div className="result result--error">
        <span className="result-label">Помилка</span>
        <div className="result-error">
          <span className="result-error-name">{result.error.name}</span>
          <span className="result-error-message">{result.error.message}</span>
        </div>
      </div>
    );
  }

  // Check — нет автоматических тестов
  if (result.type === 'no-tests') {
    return (
      <div className="result result--info">
        <span className="result-label">Перевірка</span>
        <span className="result-info-text">
          Для цього завдання автоматична перевірка недоступна.
        </span>
      </div>
    );
  }

  // Check — ошибка (синтаксис, рантайм, отсутствующая функция)
  if (result.type === 'check' && result.error) {
    return (
      <div className="result result--error">
        <span className="result-label">Помилка</span>
        <div className="result-error">
          <span className="result-error-name">{result.error.name}</span>
          <span className="result-error-message">{result.error.message}</span>
        </div>
      </div>
    );
  }

  // Check — результаты тестов
  if (result.type === 'check' && result.tests) {
    const allPassed = result.success;
    return (
      <div
        className={`result ${allPassed ? 'result--success' : 'result--error'}`}
      >
        <span className="result-label">Перевірка</span>
        <div className="test-summary">
          <span className="test-summary-icon">{allPassed ? '✓' : '✗'}</span>
          <span className="test-summary-text">
            {result.passed} / {result.total} тестів пройдено
          </span>
        </div>
        <div className="test-list">
          {result.tests.map((test, i) => (
            <div
              key={i}
              className={`test-item${test.passed ? ' test-item--passed' : ' test-item--failed'}`}
            >
              <div className="test-item-header">
                <span className="test-item-icon">
                  {test.passed ? '✓' : '✗'}
                </span>
                <span className="test-item-label">Тест {i + 1}</span>
              </div>
              <div className="test-item-details">
                <div className="test-item-row">
                  <span className="test-item-key">Вхід:</span>
                  <span className="test-item-value">
                    {formatValue(test.input)}
                  </span>
                </div>
                {test.runtimeError ? (
                  <div className="test-item-row">
                    <span className="test-item-key">Помилка:</span>
                    <span className="test-item-value test-item-value--error">
                      {test.actual}
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="test-item-row">
                      <span className="test-item-key">Очікувано:</span>
                      <span className="test-item-value">
                        {formatValue(test.expected)}
                      </span>
                    </div>
                    <div className="test-item-row">
                      <span className="test-item-key">Отримано:</span>
                      <span
                        className={`test-item-value${!test.passed ? ' test-item-value--error' : ''}`}
                      >
                        {formatValue(test.actual)}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

export default Result;