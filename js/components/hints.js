var currentHints = [];
var currentSolution = null;
var hintIndex = 0;
var solutionRevealed = false;
var warningShown = false;

function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function getHintBtn() {
    return document.getElementById('hintBtn');
}

function updateHintButton() {
    var btn = getHintBtn();
    if (!btn) return;

    var textEl = btn.querySelector('.btn-text');
    if (!textEl) return;

    if (currentHints.length === 0 && !currentSolution) {
        btn.disabled = true;
        textEl.textContent = 'Підказка';
        return;
    }

    btn.disabled = false;

    if (hintIndex >= currentHints.length) {
        btn.disabled = true;
        textEl.textContent = 'Усі підказки показано.';
    } else if (hintIndex === 0) {
        textEl.textContent = 'Підказка';
    } else {
        textEl.textContent = 'Наступна підказка';
    }
}

function renderHintsUI() {
    var container = document.getElementById('hintsContainer');
    if (!container) return;

    var html = '<div class="hints-section">';

    // Rendered hints
    for (var i = 0; i < hintIndex && i < currentHints.length; i++) {
        html += '<div class="hint-card">';
        html += '<span class="hint-number">' + (i + 1) + '</span>';
        html += '<p class="hint-text">' + escapeHtml(currentHints[i]) + '</p>';
        html += '</div>';
    }

    // Solution section
    if (currentSolution) {
        if (solutionRevealed) {
            html += '<div class="solution-code">';
            html += '<pre><code>' + escapeHtml(currentSolution) + '</code></pre>';
            html += '</div>';
        } else if (warningShown) {
            html += '<div class="solution-warning">';
            html += '<p>Вже справді хочеш побачити рішення? Спробуй ще раз або скористайся підказками.</p>';
            html += '<button class="btn btn-secondary btn-solution-confirm" id="solutionConfirm" type="button">Показати рішення</button>';
            html += '</div>';
        } else {
            html += '<button class="solution-toggle" id="solutionToggle" type="button">👀 Показати рішення</button>';
        }
    }

    html += '</div>';

    container.innerHTML = html;
    attachHintListeners();
}

function attachHintListeners() {
    var solutionToggle = document.getElementById('solutionToggle');
    if (solutionToggle) {
        solutionToggle.addEventListener('click', function() {
            warningShown = true;
            renderHintsUI();
        });
    }

    var solutionConfirm = document.getElementById('solutionConfirm');
    if (solutionConfirm) {
        solutionConfirm.addEventListener('click', function() {
            solutionRevealed = true;
            renderHintsUI();
        });
    }
}

export function renderHints(hints, solution) {
    currentHints = hints || [];
    currentSolution = solution || null;
    hintIndex = 0;
    solutionRevealed = false;
    warningShown = false;

    var container = document.getElementById('hintsContainer');
    if (!container) return;

    if (currentHints.length === 0 && !currentSolution) {
        container.innerHTML = '';
        container.classList.add('view-hidden');
    } else {
        container.classList.remove('view-hidden');
        renderHintsUI();
    }

    updateHintButton();
}

export function showNextHint() {
    if (hintIndex >= currentHints.length) return;

    hintIndex++;

    var container = document.getElementById('hintsContainer');
    if (container) {
        container.classList.remove('view-hidden');
    }

    renderHintsUI();
    updateHintButton();

    // Scroll new hint into view
    var cards = document.querySelectorAll('.hint-card');
    if (cards.length > 0) {
        var lastCard = cards[cards.length - 1];
        lastCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

export function resetHints() {
    renderHints(currentHints, currentSolution);
}