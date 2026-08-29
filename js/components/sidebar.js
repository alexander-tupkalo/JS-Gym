const categoryIcons = {
    basics: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3L2 8l3.5 5"/><path d="M10.5 3L14 8l-3.5 5"/></svg>',
    arrays: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="5" y1="4" x2="14" y2="4"/><line x1="5" y1="8" x2="14" y2="8"/><line x1="5" y1="12" x2="14" y2="12"/><circle cx="2.5" cy="4" r="0.8" fill="currentColor" stroke="none"/><circle cx="2.5" cy="8" r="0.8" fill="currentColor" stroke="none"/><circle cx="2.5" cy="12" r="0.8" fill="currentColor" stroke="none"/></svg>',
    functions: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 2C4 2 3 4 3 8s1 6 3 6"/><path d="M10 2c2 0 3 2 3 6s-1 6-3 6"/></svg>',
    objects: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M8 1.5L14.5 5v6L8 14.5 1.5 11V5L8 1.5z"/><path d="M1.5 5L8 8.5 14.5 5"/><line x1="8" y1="8.5" x2="8" y2="14.5"/></svg>',
    es6: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M8 1v3"/><path d="M8 12v3"/><path d="M1 8h3"/><path d="M12 8h3"/><path d="M3.05 3.05l2.12 2.12"/><path d="M10.83 10.83l2.12 2.12"/><path d="M12.95 3.05l-2.12 2.12"/><path d="M5.17 10.83l-2.12 2.12"/></svg>',
    async: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 8A5.5 5.5 0 1 1 8 2.5"/><polyline points="13.5,4.5 13.5,8 10,8"/></svg>'
};

const chevronSvg = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,2 8,6 4,10"/></svg>';

let onChallengeClick = null;

function closeMobileDrawer() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
    document.body.classList.remove('sidebar-open');
}

export function renderSidebar(allChallenges, names, order, challengeClickHandler) {
    const nav = document.getElementById('sidebarNav');
    if (!nav) return;

    onChallengeClick = challengeClickHandler;

    // Group challenges by category
    const byCategory = {};
    for (const ch of allChallenges) {
        if (!byCategory[ch.category]) {
            byCategory[ch.category] = [];
        }
        byCategory[ch.category].push(ch);
    }

    let html = '';

    for (const catId of order) {
        const catChallenges = byCategory[catId] || [];
        const catName = names[catId] || catId;
        const icon = categoryIcons[catId] || '';
        const hasItems = catChallenges.length > 0;

        html += '<div class="sidebar-category" data-category="' + catId + '">';
        html += '<button class="category-header" aria-expanded="false"';
        if (!hasItems) html += ' disabled';
        html += '>';
        html += '<span class="category-icon">' + icon + '</span>';
        html += '<span class="category-name">' + catName + '</span>';
        if (hasItems) {
            html += '<span class="chevron">' + chevronSvg + '</span>';
        }
        html += '</button>';

        if (hasItems) {
            html += '<div class="category-items">';
            for (const ch of catChallenges) {
                html += '<button class="challenge-item" data-id="' + ch.id + '" type="button">';
                html += '<span class="status-dot"></span>';
                html += '<span class="challenge-name">' + ch.title + '</span>';
                html += '</button>';
            }
            html += '</div>';
        } else {
            html += '<div class="category-items">';
            html += '<span class="category-empty-label">Скоро</span>';
            html += '</div>';
        }

        html += '</div>';
    }

    nav.innerHTML = html;

    // Category header click — expand/collapse
    nav.querySelectorAll('.category-header:not([disabled])').forEach(function(header) {
        header.addEventListener('click', function() {
            const category = header.closest('.sidebar-category');
            if (!category) return;
            const isExpanded = category.classList.contains('expanded');
            category.classList.toggle('expanded');
            header.setAttribute('aria-expanded', String(!isExpanded));
        });
    });

    // Challenge item click
    nav.querySelectorAll('.challenge-item').forEach(function(item) {
        item.addEventListener('click', function() {
            const id = parseInt(item.dataset.id, 10);
            if (onChallengeClick) onChallengeClick(id);
            closeMobileDrawer();
        });
    });
}

export function updateSidebarActiveState(challengeId, categoryId) {
    const nav = document.getElementById('sidebarNav');
    if (!nav) return;

    // Remove previous active state
    nav.querySelectorAll('.challenge-item.current').forEach(function(item) {
        item.classList.remove('current');
        item.removeAttribute('aria-current');
        const dot = item.querySelector('.status-dot');
        if (dot) {
            dot.classList.remove('current');
        }
    });

    // Set new active state
    const current = nav.querySelector('.challenge-item[data-id="' + challengeId + '"]');
    if (current) {
        current.classList.add('current');
        current.setAttribute('aria-current', 'true');
        const dot = current.querySelector('.status-dot');
        if (dot) {
            dot.classList.add('current');
        }
    }

    // Ensure the correct category is expanded
    nav.querySelectorAll('.sidebar-category').forEach(function(cat) {
        if (cat.dataset.category === categoryId) {
            cat.classList.add('expanded');
            const header = cat.querySelector('.category-header');
            if (header) header.setAttribute('aria-expanded', 'true');
        }
    });
}

export function initMobileDrawer() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const toggleBtn = document.getElementById('sidebarToggle');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            if (sidebar && sidebar.classList.contains('open')) {
                closeMobileDrawer();
            } else {
                if (sidebar) sidebar.classList.add('open');
                if (overlay) overlay.classList.add('visible');
                document.body.classList.add('sidebar-open');
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', closeMobileDrawer);
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
            closeMobileDrawer();
            if (toggleBtn) toggleBtn.focus();
        }
    });
}