function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

export function renderChallenge(challenge, categoryName) {
    // Update header
    var badge = document.getElementById('categoryBadge');
    var number = document.getElementById('challengeNumber');
    var title = document.getElementById('challengeTitle');

    if (badge) badge.textContent = categoryName;
    if (number) number.textContent = '#' + String(challenge.id).padStart(2, '0');
    if (title) title.textContent = challenge.title;

    // Update description
    var descEl = document.getElementById('challengeDescription');
    if (!descEl) return;

    var html = '<p class="description-text">' + escapeHtml(challenge.description) + '</p>';

    if (challenge.instructions && challenge.instructions.length > 0) {
        html += '<ol class="instructions-list">';
        for (var i = 0; i < challenge.instructions.length; i++) {
            html += '<li>' + escapeHtml(challenge.instructions[i]) + '</li>';
        }
        html += '</ol>';
    }

    if (challenge.example) {
        html += '<div class="example-block">';
        html += '<span class="example-label">Приклад:</span>';
        html += '<code>' + escapeHtml(challenge.example) + '</code>';
        html += '</div>';
    }

    descEl.innerHTML = html;
}