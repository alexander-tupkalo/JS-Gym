var iconCode = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="8,4 3,12 8,20"/><polyline points="16,4 21,12 16,20"/></svg>';

var iconHint = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 1 4 12.9V17H8v-2.1A7 7 0 0 1 12 2z"/></svg>';

var iconProgress = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>';

function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function pluralize(n) {
    var mod10 = n % 10;
    var mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return 'завдання';
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'завдання';
    return 'завдань';
}

function featureCard(icon, title, text) {
    var html = '<div class="home-feature-card">';
    html += '<div class="feature-icon">' + icon + '</div>';
    html += '<h3 class="feature-title">' + escapeHtml(title) + '</h3>';
    html += '<p class="feature-text">' + escapeHtml(text) + '</p>';
    html += '</div>';
    return html;
}

export function renderHome(categoryOrder, categoryNames, challenges) {
    var container = document.getElementById('homeView');
    if (!container) return;

    var counts = {};
    for (var i = 0; i < challenges.length; i++) {
        var cat = challenges[i].category;
        counts[cat] = (counts[cat] || 0) + 1;
    }

    var html = '<div class="home-container">';

    // Hero
    html += '<section class="home-hero">';
    html += '<span class="home-eyebrow">JAVASCRIPT PRACTICE</span>';
    html += '<h1 class="home-heading">Тренуй JavaScript.<br>Крок за кроком.</h1>';
    html += '<p class="home-description">Практичний тренажер для тих, хто хоче не просто читати JavaScript, а писати його власноруч.</p>';
    html += '<button class="btn btn-primary home-cta" id="startTrainingBtn" type="button">Почати тренування &rarr;</button>';
    html += '</section>';

    // Feature cards
    html += '<section class="home-features">';
    html += featureCard(iconCode, 'Практика', 'Розв\'язуй задачі \u2014 в\u0456д основ JavaScript до масив\u0456в, функц\u0456й та об\'\u0454кт\u0456в.');
    html += featureCard(iconHint, 'Підказки', 'Якщо застряг \u2014 отримуй підказки поступово, не відкриваючи рішення одразу.');
    html += featureCard(iconProgress, 'Прогрес', 'Рухайся крок за кроком та поступово прокачуй свої навички JavaScript.');
    html += '</section>';

    // Categories
    html += '<section class="home-categories">';
    html += '<h2 class="home-section-title">Що всередині</h2>';
    html += '<div class="home-category-list">';

    for (var j = 0; j < categoryOrder.length; j++) {
        var catId = categoryOrder[j];
        var name = categoryNames[catId] || catId;
        var count = counts[catId] || 0;

        html += '<div class="home-category-item">';
        html += '<span class="home-cat-name">' + escapeHtml(name) + '</span>';
        if (count > 0) {
            html += '<span class="home-cat-count">' + count + ' ' + pluralize(count) + '</span>';
        } else {
            html += '<span class="home-cat-soon">Скоро</span>';
        }
        html += '</div>';
    }

    html += '</div>';
    html += '</section>';

    html += '</div>';

    container.innerHTML = html;
}