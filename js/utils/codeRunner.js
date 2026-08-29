function formatValue(value) {
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

        try {
            return JSON.stringify(value, null, 2);
        } catch (e) {
            return String(value);
        }
    }

    if (typeof value === 'object') {
        try {
            return JSON.stringify(value, null, 2);
        } catch (e) {
            return String(value);
        }
    }

    return String(value);
}

export function runCode(code) {
    var logs = [];
    var originalLog = console.log;

    console.log = function() {
        var args = Array.prototype.slice.call(arguments);
        var formatted = args.map(formatValue).join(' ');
        logs.push(formatted);
    };

    try {
        var fn = new Function(code);
        fn();
        return { success: true, output: logs };
    } catch (error) {
        return {
            success: false,
            error: {
                name: error.name,
                message: error.message
            }
        };
    } finally {
        console.log = originalLog;
    }
}