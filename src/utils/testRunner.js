function deepEqual(a, b) {
    if (a === b) return true;

    if (a === null && b === null) return true;
    if (a === null || b === null) return false;
    if (typeof a !== typeof b) return false;

    if (typeof a === 'number' && isNaN(a) && isNaN(b)) return true;

    if (Array.isArray(a)) {
        if (!Array.isArray(b)) return false;
        if (a.length !== b.length) return false;
        for (var i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) return false;
        }
        return true;
    }

    if (typeof a === 'object') {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;

        for (var j = 0; j < keysA.length; j++) {
            var key = keysA[j];

            if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
            if (!deepEqual(a[key], b[key])) return false;
        }

        return true;
    }

    return false;
}

// ==========================================
// Вспомогательные функции для async тестов
// ==========================================

/**
 * Преобразует специальные входные данные в реальные Promise
 * Формат: { __type: "promise", action: "resolve"|"reject", value: ... }
 */
function resolveInputValue(input) {
    if (input !== null && typeof input === 'object' && input.__type === 'promise') {
        if (input.action === 'resolve') {
            return Promise.resolve(input.value);
        } else if (input.action === 'reject') {
            return Promise.reject(input.value);
        }
    }
    return input;
}

/**
 * Выполняет один асинхронный тест
 * Возвращает Promise с результатом теста
 */
function runAsyncTest(userFunction, test) {
    var resolvedInput = test.input.map(resolveInputValue);

    return new Promise(function(resolve) {
        var promise;

        try {
            promise = userFunction.apply(null, resolvedInput);
        } catch (e) {
            // Синхронная ошибка при вызове функции
            resolve({
                passed: false,
                input: test.input,
                expected: test.expected,
                actual: e.name + ': ' + e.message,
                runtimeError: true
            });
            return;
        }

        // Проверяем что функция вернула именно Promise
        if (!promise || typeof promise.then !== 'function') {
            resolve({
                passed: false,
                input: test.input,
                expected: test.expected,
                actual: String(promise) + ' (не є Promise)',
                runtimeError: false
            });
            return;
        }

        // Обрабатываем Promise
        promise
            .then(function(value) {
                if (test.expectReject) {
                    // Ожидали reject, но получили resolve — тест провален
                    resolve({
                        passed: false,
                        input: test.input,
                        expected: test.expected,
                        actual: String(value) + ' (очікувався reject)',
                        runtimeError: false
                    });
                } else {
                    // Ожидали resolve — проверяем значение
                    var isPassed = deepEqual(value, test.expected);
                    resolve({
                        passed: isPassed,
                        input: test.input,
                        expected: test.expected,
                        actual: value
                    });
                }
            })
            .catch(function(error) {
                // Извлекаем значение ошибки
                var errorValue;
                if (error instanceof Error) {
                    errorValue = error.message;
                } else {
                    errorValue = error;
                }

                if (test.expectReject) {
                    // Ожидали reject — проверяем значение ошибки
                    var isPassed = deepEqual(errorValue, test.expected);
                    resolve({
                        passed: isPassed,
                        input: test.input,
                        expected: test.expected,
                        actual: errorValue
                    });
                } else {
                    // Не ожидали reject — тест провален
                    resolve({
                        passed: false,
                        input: test.input,
                        expected: test.expected,
                        actual: 'Rejected: ' + String(errorValue),
                        runtimeError: false
                    });
                }
            });
    });
}

/**
 * Выполняет синхронные тесты (извлечена из оригинального кода)
 */
function runSyncTests(userFunction, tests) {
    var results = [];
    var passed = 0;

    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        var actual;

        try {
            actual = userFunction.apply(null, test.input);
        } catch (e) {
            results.push({
                passed: false,
                input: test.input,
                expected: test.expected,
                actual: e.name + ': ' + e.message,
                runtimeError: true
            });
            continue;
        }

        var isPassed = deepEqual(actual, test.expected);
        if (isPassed) passed++;

        results.push({
            passed: isPassed,
            input: test.input,
            expected: test.expected,
            actual: actual
        });
    }

    return {
        success: passed === tests.length,
        passed: passed,
        total: tests.length,
        tests: results
    };
}

// ==========================================
// Основная функция
// ==========================================

export async function runTests(code, challenge) {
    if (!challenge.functionName || !challenge.tests || challenge.tests.length === 0) {
        return null;
    }

    try {
        var wrappedCode = code +
            '\nif (typeof ' + challenge.functionName + ' !== "function") {' +
            '\n  throw new ReferenceError("__FN_NOT_FOUND__");' +
            '\n}' +
            '\nreturn ' + challenge.functionName + ';';

        var factory = new Function(wrappedCode);
        var userFunction = factory();

        // ==========================================
        // Async путь (для челленджей с isAsync: true)
        // ==========================================
        if (challenge.isAsync) {
            var asyncResults = await Promise.all(
                challenge.tests.map(function(test) {
                    return runAsyncTest(userFunction, test);
                })
            );

            var asyncPassed = asyncResults.filter(function(r) {
                return r.passed;
            }).length;

            return {
                success: asyncPassed === challenge.tests.length,
                passed: asyncPassed,
                total: challenge.tests.length,
                tests: asyncResults
            };
        }

        // ==========================================
        // Sync путь (для всех остальных челленджей)
        // ==========================================
        return runSyncTests(userFunction, challenge.tests);

    } catch (e) {
        if (e.message === '__FN_NOT_FOUND__') {
            return {
                success: false,
                error: {
                    type: 'missing_function',
                    name: 'ReferenceError',
                    message: 'Функцію ' + challenge.functionName + ' не знайдено. Перевірте назву функції та спробуйте ще раз.'
                }
            };
        }

        return {
            success: false,
            error: {
                type: (e instanceof SyntaxError) ? 'syntax' : 'runtime',
                name: e.name,
                message: e.message
            }
        };
    }
}