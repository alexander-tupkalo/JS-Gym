import { challenges, categoryNames, categoryOrder } from './data/challenges.js';
import { renderSidebar, updateSidebarActiveState, initMobileDrawer } from './components/sidebar.js';
import { renderHome } from './components/home.js';
import { renderChallenge } from './components/challenge.js';
import { renderTheory } from './components/theory.js';
import { renderHints, showNextHint } from './components/hints.js';
import { initEditor, updateEditorContent, getEditorContent } from './components/editor.js';
import { resetResult, showOutput, showError, showTestResults } from './components/result.js';
import { runCode } from './utils/codeRunner.js';
import { runTests } from './utils/testRunner.js';

var currentView = 'home';
var currentId = null;
var currentChallenge = null;

/* ========================================
   View Management
   ======================================== */

function showHome() {
    currentView = 'home';
    document.body.classList.add('home-active');

    var homeView = document.getElementById('homeView');
    var challengeView = document.getElementById('challengeView');
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebarOverlay');

    homeView.classList.remove('view-hidden');
    homeView.classList.add('active');
    challengeView.classList.add('view-hidden');
    sidebar.classList.add('sidebar-hidden');
    if (overlay) overlay.classList.remove('visible');
    document.body.classList.remove('sidebar-open');
}

function showChallenge(id) {
    currentView = 'challenge';
    document.body.classList.remove('home-active');

    var homeView = document.getElementById('homeView');
    var challengeView = document.getElementById('challengeView');
    var sidebar = document.getElementById('sidebar');

    homeView.classList.add('view-hidden');
    homeView.classList.remove('active');
    challengeView.classList.remove('view-hidden');
    sidebar.classList.remove('sidebar-hidden');

    navigateTo(id);
}

/* ========================================
   Challenge Navigation
   ======================================== */

function navigateTo(id) {
    var challenge = null;
    for (var i = 0; i < challenges.length; i++) {
        if (challenges[i].id === id) {
            challenge = challenges[i];
            break;
        }
    }
    if (!challenge) return;

    var previousId = currentId;
    currentId = id;
    currentChallenge = challenge;

    var categoryName = categoryNames[challenge.category] || challenge.category;

    renderChallenge(challenge, categoryName);
    renderTheory(challenge.theory);
    renderHints(challenge.hints, challenge.solution);
    updateEditorContent(challenge.starterCode);
    updateSidebarActiveState(challenge.id, challenge.category);
    resetResult(challenge.expectedOutput);
    updateNavButtons();

    if (previousId !== id) {
        var mainContent = document.getElementById('challengeView');
        if (mainContent) {
            mainContent.classList.remove('animate-in');
            void mainContent.offsetWidth;
            mainContent.classList.add('animate-in');
        }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavButtons() {
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    var indicator = document.getElementById('navIndicator');

    var index = -1;
    for (var i = 0; i < challenges.length; i++) {
        if (challenges[i].id === currentId) {
            index = i;
            break;
        }
    }

    if (prevBtn) prevBtn.disabled = (index <= 0);
    if (nextBtn) nextBtn.disabled = (index >= challenges.length - 1);
    if (indicator) indicator.textContent = (index + 1) + ' / ' + challenges.length;
}

/* ========================================
   Run / Check
   ======================================== */

function setButtonLoading(btnId, iconChar, textRunning, textDefault) {
    var btn = document.getElementById(btnId);
    if (!btn) return null;

    var icon = btn.querySelector('.btn-icon');
    var text = btn.querySelector('.btn-text');

    btn.classList.add('loading');
    btn.disabled = true;
    if (icon) icon.textContent = '⏳';
    if (text) text.textContent = textRunning;

    return function restore() {
        btn.classList.remove('loading');
        btn.disabled = false;
        if (icon) icon.textContent = iconChar;
        if (text) text.textContent = textDefault;
    };
}

function handleRun() {
    var code = getEditorContent();
    if (!code.trim()) return;

    var restore = setButtonLoading('runBtn', '▶', 'Виконання...', 'Запустити');

    setTimeout(function() {
        var result = runCode(code);
        var expected = currentChallenge ? currentChallenge.expectedOutput : null;

        if (result.success) {
            showOutput(result.output, expected);
        } else {
            showError(result.error, expected);
        }

        restore();
    }, 0);
}

function handleCheck() {
    var code = getEditorContent();
    if (!code.trim()) return;

    if (!currentChallenge || !currentChallenge.functionName || !currentChallenge.tests) {
        showTestResults(null);
        return;
    }

    var restore = setButtonLoading('checkBtn', '✓', 'Перевірка...', 'Перевірити');

    setTimeout(function() {
        var result = runTests(code, currentChallenge);
        showTestResults(result);
        restore();
    }, 0);
}

function handleHint() {
    showNextHint();

    var hintBtn = document.getElementById('hintBtn');
    if (hintBtn) {
        hintBtn.classList.add('hint-active');
    }
}

function handleChallengeSelect(id) {
    if (currentView === 'home') {
        showChallenge(id);
    } else {
        navigateTo(id);
    }
}

/* ========================================
   Theme
   ======================================== */

var moonSvg = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15.36 10.18A7 7 0 1 1 7.82 2.64 5.5 5.5 0 0 0 15.36 10.18z"/></svg>';

var sunSvg = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="3.5"/><line x1="9" y1="1" x2="9" y2="3"/><line x1="9" y1="15" x2="9" y2="17"/><line x1="1" y1="9" x2="3" y2="9"/><line x1="15" y1="9" x2="17" y2="9"/><line x1="3.05" y1="3.05" x2="4.46" y2="4.46"/><line x1="13.54" y1="13.54" x2="14.95" y2="14.95"/><line x1="3.05" y1="14.95" x2="4.46" y2="13.54"/><line x1="13.54" y1="4.46" x2="14.95" y2="3.05"/></svg>';

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('jsgym-theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.innerHTML = theme === 'dark' ? moonSvg : sunSvg;
    btn.setAttribute('aria-label', theme === 'dark' ? 'Світла тема' : 'Темна тема');
}

/* ========================================
   Init
   ======================================== */

function init() {
    // Preloader — runs once on initial load

    var preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('fade-out');
            preloader.addEventListener('transitionend', function() {
                preloader.remove();
            }, { once: true });
        }, 2000);
    }

    renderHome(categoryOrder, categoryNames, challenges);
    renderSidebar(challenges, categoryNames, categoryOrder, handleChallengeSelect);
    initMobileDrawer();
    initEditor();

    // Theme
    
    var savedTheme = localStorage.getItem('jsgym-theme') || 'dark';
    updateThemeIcon(savedTheme);

    var themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            var current = document.documentElement.getAttribute('data-theme') || 'dark';
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    // Logo → Home
    var logoBtn = document.getElementById('logoBtn');
    if (logoBtn) {
        logoBtn.addEventListener('click', function() {
            if (currentView !== 'home') {
                showHome();
            }
        });
    }

    // Start Training
    var startBtn = document.getElementById('startTrainingBtn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            if (challenges.length > 0) {
                showChallenge(challenges[0].id);
            }
        });
    }

    // Run / Check / Hint
    var runBtn = document.getElementById('runBtn');
    if (runBtn) {
        runBtn.addEventListener('click', handleRun);
    }

    var checkBtn = document.getElementById('checkBtn');
    if (checkBtn) {
        checkBtn.addEventListener('click', handleCheck);
    }

    var hintBtn = document.getElementById('hintBtn');
    if (hintBtn) {
        hintBtn.addEventListener('click', handleHint);
    }

    // Prev / Next
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            var index = -1;
            for (var i = 0; i < challenges.length; i++) {
                if (challenges[i].id === currentId) { index = i; break; }
            }
            if (index > 0) navigateTo(challenges[index - 1].id);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            var index = -1;
            for (var i = 0; i < challenges.length; i++) {
                if (challenges[i].id === currentId) { index = i; break; }
            }
            if (index < challenges.length - 1) navigateTo(challenges[index + 1].id);
        });
    }

    // Ctrl+Enter → Run
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            if (currentView === 'challenge') {
                handleRun();
            }
        }
    });

    showHome();
}

document.addEventListener('DOMContentLoaded', init);