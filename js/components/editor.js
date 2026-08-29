var textarea = null;
var lineNumbers = null;

function updateLineNumbers() {
    if (!textarea || !lineNumbers) return;

    var lines = textarea.value.split('\n').length;
    var existingCount = lineNumbers.children.length;

    for (var i = existingCount + 1; i <= lines; i++) {
        var div = document.createElement('div');
        div.textContent = i;
        lineNumbers.appendChild(div);
    }

    while (lineNumbers.children.length > lines) {
        lineNumbers.removeChild(lineNumbers.lastChild);
    }
}

function syncScroll() {
    if (lineNumbers) {
        lineNumbers.scrollTop = textarea.scrollTop;
    }
}

export function initEditor() {
    textarea = document.getElementById('codeEditor');
    lineNumbers = document.getElementById('lineNumbers');

    if (!textarea || !lineNumbers) return;

    textarea.addEventListener('input', updateLineNumbers);
    textarea.addEventListener('scroll', syncScroll);

    textarea.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            var start = textarea.selectionStart;
            var end = textarea.selectionEnd;
            var value = textarea.value;
            textarea.value = value.substring(0, start) + '  ' + value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 2;
            updateLineNumbers();
        }
    });

    updateLineNumbers();
}

export function updateEditorContent(code) {
    if (!textarea) return;
    textarea.value = code;
    updateLineNumbers();
    textarea.scrollTop = 0;
    if (lineNumbers) lineNumbers.scrollTop = 0;
}

export function getEditorContent() {
    if (!textarea) return '';
    return textarea.value;
}