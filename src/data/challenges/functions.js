export const challenges = [
    {
        id: 21,
        category: 'functions',
        title: 'Оголошення та виклик функції',
        description: 'Створіть функцію, яка повертає привітання для відвідувачів кафе. Функція не приймає параметрів — просто повертає фіксований рядок.',
        instructions: [
            'Оголосіть функцію getGreeting без параметрів',
            'Використайте return щоб повернути рядок "Ласкаво просимо до JS Cafe!"',
            'Не використовуйте console.log() — функція має повернути значення'
        ],
        example: 'getGreeting() → "Ласкаво просимо до JS Cafe!"',
        expectedOutput: null,
        starterCode: 'const getGreeting = () => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'getGreeting',
        tests: [
            {
                input: [],
                expected: 'Ласкаво просимо до JS Cafe!'
            },
            {
                input: [],
                expected: 'Ласкаво просимо до JS Cafe!'
            },
            {
                input: [],
                expected: 'Ласкаво просимо до JS Cafe!'
            }
        ],
        theory: {
            title: 'Оголошення функції',
            content: 'Функція — це іменований блок коду, який можна викликати багато разів. Створюється через const name = () => { ... }. Код всередині функції не виконується автоматично — він запускається лише при виклику: name(). Щоб функція повернула результат, використовуйте return.',
            example: 'const sayHello = () => {\n    return "Привіт!";\n};\n\nsayHello(); // "Привіт!"'
        },
        hints: [
            'Функція вже оголошена в стартовому коді. Вам потрібно додати return усередині фігурних дужок.',
            'return призупиняє виконання функції і передає значення тому, хто її викликав. Поверніть точний рядок.',
            'return "Ласкаво просимо до JS Cafe!";'
        ],
        solution: 'const getGreeting = () => {\n    return "Ласкаво просимо до JS Cafe!";\n};'
    },

    {
        id: 22,
        category: 'functions',
        title: 'Параметри функції',
        description: 'Створіть функцію, яка приймає назву страви та повертає відформатований рядок для меню.',
        instructions: [
            'Функція приймає один параметр — name (назва страви)',
            'Використайте шаблонний літерал щоб створити рядок у форматі "Страва: <назва>"',
            'Поверніть цей рядок'
        ],
        example: 'formatDish("Борщ") → "Страва: Борщ"\nformatDish("Піца") → "Страва: Піца"',
        expectedOutput: null,
        starterCode: 'const formatDish = (name) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'formatDish',
        tests: [
            {
                input: ['Борщ'],
                expected: 'Страва: Борщ'
            },
            {
                input: ['Піца'],
                expected: 'Страва: Піца'
            },
            {
                input: ['Кава'],
                expected: 'Страва: Кава'
            }
        ],
        theory: {
            title: 'Параметри та аргументи',
            content: 'Параметр — це змінна у визначенні функції. Аргумент — це фактичне значення, яке передається при виклику. Коли ви викликаєте formatDish("Борщ"), рядок "Борщ" стає значенням параметра name всередині функції.',
            example: 'const greet = (name) => {\n    return `Привіт, ${name}!`;\n};\n\ngreet("Оля");  // "Привіт, Оля!"\ngreet("Андрій"); // "Привіт, Андрій!"'
        },
        hints: [
            'Параметр name — це змінна, яка отримує значення при виклику функції. Використайте її всередині тіла функції.',
            'З шаблонних літерів створіть рядок: `Страва: ${name}` — де name це параметр функції.',
            'return `Страва: ${name}`;'
        ],
        solution: 'const formatDish = (name) => {\n    return `Страва: ${name}`;\n};'
    },

    {
        id: 23,
        category: 'functions',
        title: 'return',
        description: 'Напишіть функцію, яка обчислює загальну вартість замовлення. Страва коштує 150 грн. Функція приймає кількість порцій і має повернути суму, а не вивести її в консоль.',
        instructions: [
            'Всередині функції оголосіть змінну price зі значенням 150',
            'Обчисліть загальну суму: price помножити на quantity',
            'Використайте return щоб повернути результат — НЕ console.log()'
        ],
        example: 'calcTotal(3) → 450\ncalcTotal(0) → 0',
        expectedOutput: null,
        starterCode: 'const calcTotal = (quantity) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'calcTotal',
        tests: [
            {
                input: [3],
                expected: 450
            },
            {
                input: [0],
                expected: 0
            },
            {
                input: [5],
                expected: 750
            },
            {
                input: [1],
                expected: 150
            }
        ],
        theory: {
            title: 'return проти console.log()',
            content: 'console.log() виводить значення в консоль, але повертає undefined. return зупиняє функцію і передає значення назад тому, хто її викликав. Якщо функція повинна дати результат для подальшого використання — завжди використовуйте return. console.log() підходить лише для відладки.',
            example: 'const bad = () => {\n    console.log(42);  // виведе 42, але поверне undefined\n};\n\nconst good = () => {\n    return 42;        // поверне 42\n};\n\ngood() * 2;  // 84\nbad() * 2;   // NaN (undefined * 2)'
        },
        hints: [
            'Головна помилка — використати console.log() замість return. console.log виводить в консоль, але не повертає значення.',
            'Оголосіть const price = 150; всередині функції, обчисліть добуток і поверніть його через return.',
            'const price = 150;\nreturn price * quantity;'
        ],
        solution: 'const calcTotal = (quantity) => {\n    const price = 150;\n    return price * quantity;\n};'
    },

    {
        id: 24,
        category: 'functions',
        title: 'Кілька параметрів',
        description: 'Напишіть функцію, яка приймає ціну та кількість і повертає загальну суму замовлення.',
        instructions: [
            'Функція приймає два параметри: price та quantity',
            'Обчисліть суму: price помножити на quantity',
            'Поверніть результат'
        ],
        example: 'calcOrderTotal(180, 2) → 360\ncalcOrderTotal(250, 3) → 750',
        expectedOutput: null,
        starterCode: 'const calcOrderTotal = (price, quantity) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'calcOrderTotal',
        tests: [
            {
                input: [180, 2],
                expected: 360
            },
            {
                input: [100, 0],
                expected: 0
            },
            {
                input: [250, 3],
                expected: 750
            },
            {
                input: [90, 1],
                expected: 90
            }
        ],
        theory: {
            title: 'Кілька параметрів',
            content: 'Функція може приймати будь-яку кількість параметрів, розділених комами. Порядок має значення: перший аргумент потрапляє в перший параметр, другий — у другий і т.д. При виклику всі обов\'язкові параметри потрібно передати.',
            example: 'const calc = (price, quantity) => {\n    return price * quantity;\n};\n\ncalc(100, 3);  // 300\n// 100 → price, 3 → quantity'
        },
        hints: [
            'Функція вже має два параметри: price та quantity. Порядок аргументів при виклику відповідає порядку параметрів.',
            'Просто перемножте два параметри і поверніть результат.',
            'return price * quantity;'
        ],
        solution: 'const calcOrderTotal = (price, quantity) => {\n    return price * quantity;\n};'
    },

    {
        id: 25,
        category: 'functions',
        title: 'Значення за замовчуванням',
        description: 'Напишіть функцію, яка обчислює суму замовлення з чайовими. Відсоток чайових за замовчуванням — 10%.',
        instructions: [
            'Функція приймає два параметри: total та tipPercent зі значенням за замовчуванням 10',
            'Обчисліть чайові: total * (tipPercent / 100)',
            'Поверніть загальну суму: total + чайові'
        ],
        example: 'calcWithTip(500) → 550\ncalcWithTip(500, 15) → 575\ncalcWithTip(200, 0) → 200',
        expectedOutput: null,
        starterCode: 'const calcWithTip = (total, tipPercent = 10) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'calcWithTip',
        tests: [
            {
                input: [500],
                expected: 550
            },
            {
                input: [500, 15],
                expected: 575
            },
            {
                input: [200, 0],
                expected: 200
            },
            {
                input: [1000],
                expected: 1100
            }
        ],
        theory: {
            title: 'Параметри за замовчуванням',
            content: 'Параметру можна задати значення за замовчуванням через = у визначенні функції. Якщо при виклику аргумент не передано, використовується значення за замовчуванням. Якщо передано — воно перевизначає замовчування. Параметри за замовчуванням завжди стоять в кінці списку параметрів.',
            example: 'const greet = (name, greeting = "Привіт") => {\n    return `${greeting}, ${name}!`;\n};\n\ngreet("Оля");           // "Привіт, Оля!"\ngreet("Оля", "Вітаю"); // "Вітаю, Оля!"'
        },
        hints: [
            'Значення за замовчуванням вже вказано в стартовому коді: tipPercent = 10. Вам потрібно використати цей параметр у обчисленні.',
            'Чайові = total * (tipPercent / 100). Загальна сума = total + чайові. Поверніть загальну суму.',
            'return total + total * (tipPercent / 100);'
        ],
        solution: 'const calcWithTip = (total, tipPercent = 10) => {\n    return total + total * (tipPercent / 100);\n};'
    },

    {
        id: 26,
        category: 'functions',
        title: 'Локальні та глобальні змінні',
        description: 'У коді вже оголошена глобальна змінна serviceFee. Створіть функцію, яка використовує власну локальну змінну з такою ж назвою та іншим значенням.',
        instructions: [
            'Всередині функції оголосіть локальну змінну serviceFee зі значенням 20',
            'Обчисліть фінальну ціну: price + локальна serviceFee',
            'Поверніть результат — функція має використовувати саме локальну змінну'
        ],
        example: 'getFinalPrice(100) → 120\ngetFinalPrice(250) → 270',
        expectedOutput: null,
        starterCode: 'let serviceFee = 50;\n\nconst getFinalPrice = (price) => {\n    // оголосіть локальну змінну serviceFee зі значенням 20\n    // поверніть price + локальна serviceFee\n};',
        difficulty: 'easy',
        functionName: 'getFinalPrice',
        tests: [
            {
                input: [100],
                expected: 120
            },
            {
                input: [250],
                expected: 270
            },
            {
                input: [0],
                expected: 20
            },
            {
                input: [80],
                expected: 100
            }
        ],
        theory: {
            title: 'Локальні та глобальні змінні',
            content: 'Змінна, оголошена поза функцією — глобальна, доступна скрізь. Змінна, оголошена всередині функції — локальна, доступна тільки в ній. Якщо локальна та глобальна змінна мають однакову назву, всередині функції використовується локальна. Це називається тінінням (shadowing).',
            example: 'let x = 10; // глобальна\n\nconst foo = () => {\n    let x = 5;  // локальна, тінить глобальну\n    return x;   // 5\n};\n\nfoo(); // 5\nx;     // 10 — глобальна не змінилася'
        },
        hints: [
            'Оголосіть let serviceFee = 20; всередині функції. Ця локальна змінна «тінить» глобальну serviceFee = 50.',
            'Функція повинна повернути price + serviceFee, де serviceFee — це локальна змінна (20), а не глобальна (50).',
            'let serviceFee = 20;\nreturn price + serviceFee;'
        ],
        solution: 'let serviceFee = 50;\n\nconst getFinalPrice = (price) => {\n    let serviceFee = 20;\n    return price + serviceFee;\n};'
    },

    {
        id: 27,
        category: 'functions',
        title: 'Callback-функції',
        description: 'Створіть функцію, яка приймає назву страви та іншу функцію, і використовує цю функцію для обробки назви.',
        instructions: [
            'Функція приймає два параметри: dishName (рядок) та prepareFn (функція)',
            'Викличте prepareFn, передавши їй dishName як аргумент',
            'Поверніть результат виклику prepareFn'
        ],
        example: 'serveDish("Борщ", (d) => `Страва: ${d} готова!`) → "Страва: Борщ готова!"',
        expectedOutput: null,
        starterCode: 'const serveDish = (dishName, prepareFn) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'serveDish',
        tests: [
            {
                input: ['Борщ', (d) => `Страва: ${d} готова!`],
                expected: 'Страва: Борщ готова!'
            },
            {
                input: ['Кава', (d) => `${d} подана`],
                expected: 'Кава подана'
            },
            {
                input: ['салат', (d) => d.toUpperCase()],
                expected: 'САЛАТ'
            },
            {
                input: ['Суп', (d) => d.length],
                expected: 3
            }
        ],
        theory: {
            title: 'Callback-функції',
            content: 'У JavaScript функція — це значення. Її можна передати як аргумент іншій функції. Така функція називається callback (зворотній виклик). Функція, що отримує callback, викликає її у потрібний момент. Це основа для багатьох патернів у JS.',
            example: 'const greet = (name, formatter) => {\n    return formatter(name);\n};\n\ngreet("Оля", n => `Вітаю, ${n}!`); // "Вітаю, Оля!"\ngreet("Оля", n => n.toUpperCase()); // "ОЛЯ"'
        },
        hints: [
            'prepareFn — це функція, яку передали як аргумент. Її можна викликати як звичайну функцію: prepareFn(значення).',
            'Викличте prepareFn(dishName) і поверніть те, що вона поверне. Вам не потрібно знати, що саме робить prepareFn — просто передайте їй dishName.',
            'return prepareFn(dishName);'
        ],
        solution: 'const serveDish = (dishName, prepareFn) => {\n    return prepareFn(dishName);\n};'
    },

    {
        id: 28,
        category: 'functions',
        title: 'Arrow functions',
        description: 'Перепишіть звичайну функцію у вигляді arrow function. Результат має бути однаковим.',
        instructions: [
            'Замініть function на синтаксис arrow function: () => {}',
            'Збережіть логіку обчислень без змін',
            'Не використовуйте скорочений синтаксис — залишіть фігурні дужки та return'
        ],
        example: 'addTip(500, 10) → 550\naddTip(200, 0) → 200',
        expectedOutput: null,
        starterCode: '// Перепишіть цю функцію як arrow function:\n//\n// function addTip(total, percent) {\n//     return total + total * (percent / 100);\n// }\n\nconst addTip = /* ваш код */;',
        difficulty: 'easy',
        functionName: 'addTip',
        tests: [
            {
                input: [500, 10],
                expected: 550
            },
            {
                input: [200, 0],
                expected: 200
            },
            {
                input: [1000, 20],
                expected: 1200
            },
            {
                input: [150, 15],
                expected: 172.5
            }
        ],
        theory: {
            title: 'Синтаксис arrow function',
            content: 'Arrow function — це коротший запис функції. Замість ключового слова function використовується => між параметрами та тілом. Повна форма: const name = (params) => { return ... };. Параметри беруть у дужки. Якщо параметр один, дужки можна опустити, але для початківців краще завжди їх писати.',
            example: '// Звичайна функція:\nfunction add(a, b) {\n    return a + b;\n}\n\n// Arrow function:\nconst add = (a, b) => {\n    return a + b;\n};'
        },
        hints: [
            'Замініть function addTip(total, percent) на (total, percent) => {}. Призначте результат змінній addTip через const.',
            'const addTip = (total, percent) => { ... } — всередині дужок напишіть ту саму логіку з return.',
            'const addTip = (total, percent) => {\n    return total + total * (percent / 100);\n};'
        ],
        solution: 'const addTip = (total, percent) => {\n    return total + total * (percent / 100);\n};'
    },

    {
        id: 29,
        category: 'functions',
        title: 'Функція як аргумент',
        description: 'Створіть функцію, яка застосовує передану функцію-перетворення до кожного елемента масиву і повертає новий масив результатів.',
        instructions: [
            'Функція приймає масив items та функцію transformFn',
            'Створіть порожній масив result',
            'Використайте цикл for для перебору items',
            'На кожній ітерації викличте transformFn(items[i]) і додайте результат у result через push()',
            'Поверніть result'
        ],
        example: 'applyToEach([100, 200, 300], (p) => p + 10) → [110, 210, 310]',
        expectedOutput: null,
        starterCode: 'const applyToEach = (items, transformFn) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'applyToEach',
        tests: [
            {
                input: [[100, 200, 300], (p) => p + 10],
                expected: [110, 210, 310]
            },
            {
                input: [[1, 2, 3], (n) => n * n],
                expected: [1, 4, 9]
            },
            {
                input: [[], (x) => x * 2],
                expected: []
            },
            {
                input: [[10, 20], (n) => n > 15],
                expected: [false, true]
            }
        ],
        theory: {
            title: 'Функція як аргумент у практиці',
            content: 'Передача функції як аргументу дозволяє створювати універсальні функції. Замість того, щоб писати окрему функцію для кожної операції, ви пишете одну, яка приймає будь-яку операцію як параметр. Це принцип, на якому працюють map, filter та інші методи масивів.',
            example: 'const applyToEach = (items, fn) => {\n    const result = [];\n    for (let i = 0; i < items.length; i++) {\n        result.push(fn(items[i]));\n    }\n    return result;\n};\n\napplyToEach([1, 2, 3], n => n * 2); // [2, 4, 6]'
        },
        hints: [
            'Створіть порожній масив result. Використайте цикл for для перебору items, як у завданні про суму цін.',
            'На кожній ітерації викличте transformFn(items[i]) — це застосує передану функцію до поточного елемента. Результат додайте через result.push().',
            'const result = [];\nfor (let i = 0; i < items.length; i++) {\n    result.push(transformFn(items[i]));\n}\nreturn result;'
        ],
        solution: 'const applyToEach = (items, transformFn) => {\n    const result = [];\n    for (let i = 0; i < items.length; i++) {\n        result.push(transformFn(items[i]));\n    }\n    return result;\n};'
    },

    {
        id: 30,
        category: 'functions',
        title: 'Формування чеку',
        description: 'Створіть функцію, яка формує рядок чеку для замовлення. Об\'єднайте декілька концептів: параметри, значення за замовчуванням, локальну змінну та return.',
        instructions: [
            'Функція приймає: dish (рядок), price (число), quantity (число), currency (рядок, за замовчуванням "грн")',
            'Обчисліть total = price * quantity — це локальна змінна',
            'Поверніть рядок у форматі: "Борщ: 2 × 120 грн = 240 грн"'
        ],
        example: 'formatReceipt("Борщ", 120, 2) → "Борщ: 2 × 120 грн = 240 грн"\nformatReceipt("Стейк", 350, 1, "$") → "Стейк: 1 × 350 $ = 350 $"',
        expectedOutput: null,
        starterCode: 'const formatReceipt = (dish, price, quantity, currency = "грн") => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'formatReceipt',
        tests: [
            {
                input: ['Борщ', 120, 2],
                expected: 'Борщ: 2 × 120 грн = 240 грн'
            },
            {
                input: ['Стейк', 350, 1, '$'],
                expected: 'Стейк: 1 × 350 $ = 350 $'
            },
            {
                input: ['Кава', 60, 3],
                expected: 'Кава: 3 × 60 грн = 180 грн'
            },
            {
                input: ['Салат', 90, 0],
                expected: 'Салат: 0 × 90 грн = 0 грн'
            },
            {
                input: ['Піца', 250, 2, '€'],
                expected: 'Піца: 2 × 250 € = 500 €'
            }
        ],
        theory: {
            title: 'Комбінування концептів',
            content: 'Реальні функції часто використовують кілька концептів одночасно: параметри, значення за замовчуванням, локальні змінні для проміжних обчислень та return для результату. Значення за замовчуванням ставиться в кінці списку параметрів. Локальні змінні роблять код читабельнішим.',
            example: 'const format = (name, price, qty, cur = "грн") => {\n    const total = price * qty;\n    return `${name}: ${qty} × ${price} ${cur} = ${total} ${cur}`;\n};'
        },
        hints: [
            'Оголосіть локальну змінну total = price * quantity. Потім використайте шаблонний літерал з усіма чотирма параметрами.',
            'Формат рядка: `${dish}: ${quantity} × ${price} ${currency} = ${total} ${currency}`. Змінна currency вже має значення за замовчуванням "грн".',
            'const total = price * quantity;\nreturn `${dish}: ${quantity} × ${price} ${currency} = ${total} ${currency}`;'
        ],
        solution: 'const formatReceipt = (dish, price, quantity, currency = "грн") => {\n    const total = price * quantity;\n    return `${dish}: ${quantity} × ${price} ${currency} = ${total} ${currency}`;\n};'
    }
];