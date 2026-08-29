function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function formatTestValue(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'string') return value;
    if (typeof value === 'function') {
        return value.name ? 'function ' + value.name + '()' : 'function()';
    }
    if (typeof value === 'symbol') return value.toString();

    if (Array.isArray(value)) {
        var isSimple = value.every(function(item) {
            return item === null || (typeof item !== 'object' && typeof item !== 'function');
        });
        if (isSimple) {
            return '[' + value.map(function(v) {
                return v === null ? 'null' : String(v);
            }).join(', ') + ']';
        }
        try { return JSON.stringify(value, null, 2); } catch (e) { return String(value); }
    }

    if (typeof value === 'object') {
        try { return JSON.stringify(value, null, 2); } catch (e) { return String(value); }
    }

    return String(value);
}

function buildExpectedRow(expected) {
    if (!expected) return '';

    var html = '<div class="result-row">';
    html += '<span class="result-label">Очікується:</span>';
    html += '<code class="result-code expected">' + escapeHtml(expected) + '</code>';
    html += '</div>';
    html += '<div class="result-divider"></div>';
    return html;
}

export function resetResult(expected) {
    var body = document.getElementById('resultBody');
    if (!body) return;

    var html = buildExpectedRow(expected);

    html += '<div class="result-row">';
    html += '<span class="result-label">Результат:</span>';
    html += '<code class="result-code actual">—</code>';
    html += '</div>';

    html += '<div class="result-message">';
    html += '<span>✓ Тут з\'явиться результат після запуску</span>';
    html += '</div>';

    body.innerHTML = html;
}

export function showOutput(lines, expected) {
    var body = document.getElementById('resultBody');
    if (!body) return;

    var html = buildExpectedRow(expected);

    if (lines.length > 0) {
        html += '<div class="result-output-lines">';
        for (var i = 0; i < lines.length; i++) {
            html += '<div class="result-output-line">';
            html += '<code>' + escapeHtml(lines[i]) + '</code>';
            html += '</div>';
        }
        html += '</div>';
    } else {
        html += '<div class="result-no-output">';
        html += '<span>Код виконано без виводу в консоль</span>';
        html += '</div>';
    }

    body.innerHTML = html;
}

export function showError(error, expected) {
    var body = document.getElementById('resultBody');
    if (!body) return;

    var html = buildExpectedRow(expected);

    html += '<div class="result-error">';
    html += '<span class="result-error-label">Помилка</span>';
    html += '<code class="result-error-text">' + escapeHtml(error.name + ': ' + error.message) + '</code>';
    html += '</div>';

    body.innerHTML = html;
}

export function showTestResults(result) {
    var body = document.getElementById('resultBody');
    if (!body) return;

    // Non-testable challenge
    if (result === null) {
        body.innerHTML = '<div class="result-message">' +
            '<span>Це завдання не має автоматичних тестів. Перевірте результат вручну.</span>' +
            '</div>';
        return;
    }

    // Execution error (syntax, runtime, missing function)
    if (result.error) {
        var html = '<div class="result-error">';
        if (result.error.type === 'missing_function') {
            html += '<span class="result-error-label">Помилка</span>';
            html += '<code class="result-error-text">' + escapeHtml(result.error.message) + '</code>';
        } else {
            html += '<span class="result-error-label">Помилка виконання</span>';
            html += '<code class="result-error-text">' + escapeHtml(result.error.name + ': ' + result.error.message) + '</code>';
        }
        html += '</div>';
        body.innerHTML = html;
        return;
    }

    // Test results
    var allPassed = result.success;
    var html = '<div class="test-summary ';
    html += allPassed ? 'test-summary-success' : 'test-summary-failure';
    html += '">';
    html += '<span>' + (allPassed ? '✓' : '✕') + ' ' + result.passed + ' / ' + result.total + ' тестів пройдено</span>';
    html += '</div>';

    // Individual tests
    html += '<div class="test-list">';
    for (var i = 0; i < result.tests.length; i++) {
        var test = result.tests[i];

        html += '<div class="test-item ' + (test.passed ? 'test-passed' : 'test-failed') + '">';
        html += '<span class="test-number">Тест ' + (i + 1) + '</span>';
        html += '<span class="test-status">' + (test.passed ? '✓' : '✕') + '</span>';
        html += '</div>';

        // Details for failed tests
        if (!test.passed) {
            html += '<div class="test-details">';
            if (test.runtimeError) {
                html += '<code class="test-detail-error">' + escapeHtml(String(test.actual)) + '</code>';
            } else {
                html += '<div class="test-detail-row">';
                html += '<span class="test-detail-label">Очікуване:</span>';
                html += '<code class="test-detail-value">' + escapeHtml(formatTestValue(test.expected)) + '</code>';
                html += '</div>';
                html += '<div class="test-detail-row">';
                html += '<span class="test-detail-label">Отримано:</span>';
                html += '<code class="test-detail-value test-detail-actual">' + escapeHtml(formatTestValue(test.actual)) + '</code>';
                html += '</div>';
            }
            html += '</div>';
        }
    }
    html += '</div>';

    // Success message
    if (allPassed) {
        html += '<div class="test-success-message">🎉 Завдання виконано!</div>';
    }

    body.innerHTML = html;
}