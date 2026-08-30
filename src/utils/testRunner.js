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

export function runTests(code, challenge) {
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

        var results = [];
        var passed = 0;

        for (var i = 0; i < challenge.tests.length; i++) {
            var test = challenge.tests[i];
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
            success: passed === challenge.tests.length,
            passed: passed,
            total: challenge.tests.length,
            tests: results
        };

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