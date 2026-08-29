var isExpanded = false;

function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

export function renderTheory(theoryData) {
    var container = document.getElementById('theoryContainer');
    if (!container) return;

    isExpanded = false;

    if (!theoryData || !theoryData.title) {
        container.innerHTML = '';
        return;
    }

    var html = '<div class="theory-section" id="theorySection">';
    html += '<button class="theory-toggle" id="theoryToggle" type="button" aria-expanded="false" aria-controls="theoryBody">';
    html += '<span class="theory-toggle-label">📚 Міні-теорія</span>';
    html += '<span class="theory-chevron" aria-hidden="true">▼</span>';
    html += '</button>';
    html += '<div class="theory-body" id="theoryBody" hidden>';
    html += '<h3 class="theory-title">' + escapeHtml(theoryData.title) + '</h3>';

    if (theoryData.content) {
        html += '<p class="theory-text">' + escapeHtml(theoryData.content) + '</p>';
    }

    if (theoryData.example) {
        html += '<div class="theory-example">';
        html += '<span class="theory-example-label">Приклад:</span>';
        html += '<code>' + escapeHtml(theoryData.example) + '</code>';
        html += '</div>';
    }

    html += '</div>';
    html += '</div>';

    container.innerHTML = html;

    var toggle = document.getElementById('theoryToggle');
    if (toggle) {
        toggle.addEventListener('click', toggleTheory);
    }
}

function toggleTheory() {
    isExpanded = !isExpanded;

    var section = document.getElementById('theorySection');
    var body = document.getElementById('theoryBody');
    var toggle = document.getElementById('theoryToggle');

    if (!section || !body || !toggle) return;

    if (isExpanded) {
        section.classList.add('open');
        body.removeAttribute('hidden');
        toggle.setAttribute('aria-expanded', 'true');
    } else {
        section.classList.remove('open');
        body.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
    }
}