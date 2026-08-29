var currentLang = 'uk';
var listeners = [];

var translations = {
    uk: {
        'header.sidebar': 'Відкрити меню',
        'header.logo': 'На головну',
        'home.eyebrow': 'JAVASCRIPT PRACTICE',
        'home.heading': 'Тренуй JavaScript.<br>Крок за кроком.',
        'home.description': 'Практичний тренажер для тих, хто хоче не просто читати JavaScript, а писати його власноруч.',
        'home.cta': 'Почати тренування →',
        'home.feature.practice.title': 'Практика',
        'home.feature.practice.text': 'Розв\'язуй задачі — від основ JavaScript до масивів, функцій та об\'єктів.',
        'home.feature.hints.title': 'Підказки',
        'home.feature.hints.text': 'Якщо застряг — отримуй підказки поступово, не відкриваючи рішення одразу.',
        'home.feature.progress.title': 'Прогрес',
        'home.feature.progress.text': 'Рухайся крок за кроком та поступово прокачуй свої навички JavaScript.',
        'home.section.title': 'Що всередині',
        'home.soon': 'Скоро',
        'sidebar.title': 'Тренування',
        'btn.run': 'Запустити',
        'btn.running': 'Виконання...',
        'btn.check': 'Перевірити',
        'btn.checking': 'Перевірка...',
        'btn.hint': 'Підказка',
        'nav.prev': '← Попереднє',
        'nav.next': 'Наступне →',
        'result.title': 'Результат',
        'result.expected': 'Очікуваний результат',
        'result.actual': 'Ваш результат',
        'result.output': 'Вивід',
        'result.error': 'Помилка',
        'result.noOutput': 'Немає виводу',
        'result.noTests': 'Це завдання не має автоматичних тестів. Перевірте результат вручну.',
        'result.allPassed': 'Всі тести пройдено! ✓',
        'result.someFailed': 'Деякі тести не пройдено',
        'result.test': 'Тест',
        'result.passed': 'Пройдено',
        'result.failed': 'Не пройдено',
        'theory.toggle': 'Теорія',
        'theory.example': 'Приклад',
        'hint.label': 'Підказка',
        'hint.allShown': 'Усі підказки показано',
        'solution.show': 'Показати рішення',
        'solution.warning': 'Спойлер: нижче наведено повне рішення. Спробуйте розв\'язати самостійно!',
        'solution.confirm': 'Показати рішення',
        'example.label': 'Приклад',
        'instructions.label': 'Інструкції',
        'plural.1': 'завдання',
        'plural.2_4': 'завдання',
        'plural.5': 'завдань'
    },
    en: {
        'header.sidebar': 'Open menu',
        'header.logo': 'Go to home',
        'home.eyebrow': 'JAVASCRIPT PRACTICE',
        'home.heading': 'Practice JavaScript.<br>Step by step.',
        'home.description': 'A hands-on trainer for those who want to write JavaScript, not just read about it.',
        'home.cta': 'Start training →',
        'home.feature.practice.title': 'Practice',
        'home.feature.practice.text': 'Solve challenges — from JavaScript basics to arrays, functions, and objects.',
        'home.feature.hints.title': 'Hints',
        'home.feature.hints.text': 'Stuck? Get hints progressively without revealing the solution right away.',
        'home.feature.progress.title': 'Progress',
        'home.feature.progress.text': 'Move step by step and gradually level up your JavaScript skills.',
        'home.section.title': "What's inside",
        'home.soon': 'Coming soon',
        'sidebar.title': 'Training',
        'btn.run': 'Run',
        'btn.running': 'Running...',
        'btn.check': 'Check',
        'btn.checking': 'Checking...',
        'btn.hint': 'Hint',
        'nav.prev': '← Previous',
        'nav.next': 'Next →',
        'result.title': 'Result',
        'result.expected': 'Expected',
        'result.actual': 'Actual',
        'result.output': 'Output',
        'result.error': 'Error',
        'result.noOutput': 'No output',
        'result.noTests': 'This challenge has no automated tests. Check the result manually.',
        'result.allPassed': 'All tests passed! ✓',
        'result.someFailed': 'Some tests failed',
        'result.test': 'Test',
        'result.passed': 'Passed',
        'result.failed': 'Failed',
        'theory.toggle': 'Theory',
        'theory.example': 'Example',
        'hint.label': 'Hint',
        'hint.allShown': 'All hints shown',
        'solution.show': 'Show solution',
        'solution.warning': 'Spoiler: the full solution is below. Try to solve it yourself first!',
        'solution.confirm': 'Show solution',
        'example.label': 'Example',
        'instructions.label': 'Instructions',
        'plural.1': 'challenge',
        'plural.2_4': 'challenges',
        'plural.5': 'challenges'
    }
};

export function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || key;
}

export function getCurrentLang() {
    return currentLang;
}

export function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('jsgym-language', lang);
    document.documentElement.setAttribute('lang', lang);
    for (var i = 0; i < listeners.length; i++) {
        listeners[i](lang);
    }
}

export function onLanguageChange(fn) {
    listeners.push(fn);
}

export function initLanguage() {
    var saved = localStorage.getItem('jsgym-language');
    if (saved === 'en' || saved === 'uk') {
        currentLang = saved;
    }
    document.documentElement.setAttribute('lang', currentLang);
}

export function localize(value) {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object' && value.uk !== undefined) {
        return value[currentLang] || value.uk || '';
    }
    return String(value);
}

export function localizeArray(arr) {
    if (!arr) return [];
    if (Array.isArray(arr)) return arr;
    if (typeof arr === 'object' && arr.uk) {
        return arr[currentLang] || arr.uk || [];
    }
    return [];
}