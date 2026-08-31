export const challenges = [
    {
        "id": 38,
        "category": "es6",
        "title": "Очищення даних користувача",
        "description": "При підготовці даних для відправки на клієнт потрібно видалити конфіденційні поля (пароль та токен), а всі інші дані користувача повернути в окремому об'єкті.",
        "instructions": [
            "Функція приймає об'єкт користувача, який містить поля id, name, password, token та інші",
            "Використовуйте деструктуризацію ES6 для витягування password та token",
            "За допомогою rest-оператора (...) зберіть всі інші безпечні поля в один об'єкт",
            "Поверніть цей новий об'єкт із безпечними даними"
        ],
        "example": "extractPublicData({ id: 1, name: 'Alice', password: '123', token: 'xyz', role: 'admin' }) → { id: 1, name: 'Alice', role: 'admin' }",
        "expectedOutput": null,
        "starterCode": "'use strict';\n\nconst extractPublicData = (user) => {\n  // Виділіть безпечні дані за допомогою ES6+\n};",
        "difficulty": "easy",
        "functionName": "extractPublicData",
        "tests": [
            {
                "input": [
                    { "id": 1, "name": "Alice", "password": "superSecretPassword123", "token": "jwt-token-xyz", "role": "admin" }
                ],
                "expected": { "id": 1, "name": "Alice", "role": "admin" }
            },
            {
                "input": [
                    { "id": 42, "name": "Bob", "email": "bob@test.com", "password": "qwerty", "token": "session-abc", "age": 25 }
                ],
                "expected": { "id": 42, "name": "Bob", "email": "bob@test.com", "age": 25 }
            },
            {
                "input": [
                    { "password": "111", "token": "222" }
                ],
                "expected": {}
            }
        ],
        "theory": {
            "title": "Деструктуризація та rest-оператор в ES6+",
            "content": "Деструктуризація об'єктів дозволяє швидко оголошувати змінні з властивостей об'єкта. Поєднання деструктуризації з rest-оператором (...) дозволяє 'відщипнути' непотрібні властивості, а решту автоматично запакувати в новий чистий об'єкт.",
            "example": "const user = { name: 'Ivan', age: 20, active: true };\nconst { active, ...publicInfo } = user;\n// publicInfo буде { name: 'Ivan', age: 20 }"
        },
        "hints": [
            "Синтаксис деструктуризації: const { password, token, ...rest } = user;",
            "Змінна rest автоматично стане об'єктом, що містить усі поля, крім password та token.",
            "return rest;"
        ],
        "solution": "'use strict';\n\nconst extractPublicData = (user) => {\n  const { password, token, ...publicData } = user;\n  return publicData;\n};"
    },

    {
        "id": 39,
        "category": "es6",
        "title": "Оновлення налаштувань користувача",
        "description": "Створіть функцію, яка приймає поточні налаштування користувача та об'єкт із новими змінами. Функція повинна повернути новий об'єкт, де старі налаштування об'єднані з новими за допомогою spread-оператора (...), а також додано стандартне поле { updatedAt: '2026' }.",
        "instructions": [
            "Функція приймає два об'єкти: currentSettings (поточні) та newChanges (зміни)",
            "Використовуйте spread-оператор (...) для копіювання властивостей обох об'єктів у новий об'єкт",
            "Порядок об'єднання має значення: нові зміни повинні перезаписувати старі значення",
            "Додайте у фінальний об'єкт нове поле з ключем updatedAt та значенням '2026'",
            "Переконайтеся, що функція повертає абсолютно новий об'єкт (не змінює оригінальні)"
        ],
        "example": "updateSettings({ theme: 'dark', lang: 'uk' }, { theme: 'light' }) → { theme: 'light', lang: 'uk', updatedAt: '2026' }",
        "expectedOutput": null,
        "starterCode": "'use strict';\n\nconst updateSettings = (currentSettings, newChanges) => {\n  // Об'єднайте об'єкти за допомогою spread-оператора\n};",
        "difficulty": "easy",
        "functionName": "updateSettings",
        "tests": [
            {
                "input": [
                    { "theme": "dark", "lang": "uk", "notifications": true },
                    { "theme": "light", "notifications": false }
                ],
                "expected": { "theme": "light", "lang": "uk", "notifications": false, "updatedAt": "2026" }
            },
            {
                "input": [
                    { "fontSize": "14px", "fontFamily": "Arial" },
                    { "fontSize": "16px" }
                ],
                "expected": { "fontSize": "16px", "fontFamily": "Arial", "updatedAt": "2026" }
            },
            {
                "input": [
                    {},
                    { "theme": "dark" }
                ],
                "expected": { "theme": "dark", "updatedAt": "2026" }
            }
        ],
        "theory": {
            "title": "Spread-оператор для об'єктів в ES6+",
            "content": "Spread-оператор (...) дозволяє копіювати всі власні властивості одного об'єкта в інший. Це незамінний інструмент для створення копій без зміни оригінальних даних (immutability). Якщо властивості в об'єктах збігаються, то властивість з об'єкта, який вказано праворуч (пізніше), перезапише попередню.",
            "example": "const defaultUser = { name: 'Guest', role: 'user' };\nconst adminUser = { ...defaultUser, role: 'admin', age: 30 };\n// adminUser буде { name: 'Guest', role: 'admin', age: 30 }"
        },
        "hints": [
            "Створіть новий об'єкт літералом { }.",
            "Розгорніть спочатку базові налаштування, потім нові зміни: { ...currentSettings, ...newChanges }.",
            "Не забудьте в цей же об'єкт додати властивість updatedAt: '2026'."
        ],
        "solution": "'use strict';\n\nconst updateSettings = (currentSettings, newChanges) => {\n  return {\n    ...currentSettings,\n    ...newChanges,\n    updatedAt: '2026'\n  };\n};"
    },

    {
        "id": 40,
        "category": "es6",
        "title": "Підрахунок знижки для чека",
        "description": "Створіть функцію, яка приймає відсоток знижки першим аргументом, а всі наступні аргументи — це ціни товарів. Кількість товарів може бути довільною. Функція повинна порахувати загальну суму товарів за допомогою rest-параметра та повернути фінальну вартість з урахуванням знижки.",
        "instructions": [
            "Перший параметр функції — discount (число від 0 до 100)",
            "Використовуйте rest-параметр (...prices) для збору всіх наступних аргументів-цін у масив",
            "Порахуйте суму всіх елементів масиву prices",
            "Застосуйте знижку до отриманої суми за формулою: сума * (1 - discount / 100)",
            "Поверніть підсумкове число (округлювати не потрібно)"
        ],
        "example": "calculateDiscountCheck(10, 100, 200, 300) → 540 (сума 600 мінус 10% знижки)",
        "expectedOutput": null,
        "starterCode": "'use strict';\n\nconst calculateDiscountCheck = (discount, ...prices) => {\n  // Використовуйте rest-параметр для підрахунку суми\n};",
        "difficulty": "easy",
        "functionName": "calculateDiscountCheck",
        "tests": [
            {
                "input": [10, 100, 200, 300],
                "expected": 540
            },
            {
                "input": [20, 50, 50],
                "expected": 80
            },
            {
                "input": [0, 80],
                "expected": 80
            },
            {
                "input": [50],
                "expected": 0
            }
        ],
        "theory": {
            "title": "Rest-параметри у функціях JavaScript",
            "content": "Rest-параметри (записуються як три крапки перед ім'ям змінної: ...args) дозволяють функції приймати неокреслену кількість аргументів у вигляді масиву. Важливе правило: rest-параметр завжди повинен бути останнім у списку аргументів функції.",
            "example": "const sumAll = (...numbers) => numbers.reduce((sum, n) => sum + n, 0);\n// sumAll(1, 2, 3) створить масив всередині функції"
        },
        "hints": [
            "Оголосіть функцію так: const calculateDiscountCheck = (discount, ...prices) => { ... }",
            "Оскільки prices — це повноцінний масив, ви можете застосувати до нього метод .reduce() для знаходження суми.",
            "Формула для повернення результату: const total = prices.reduce(...);\nreturn total - (total * discount / 100);"
        ],
        "solution": "'use strict';\n\nconst calculateDiscountCheck = (discount, ...prices) => {\n  const total = prices.reduce((sum, price) => sum + price, 0);\n  return total * (1 - discount / 100);\n};"
    },

    {
        "id": 41,
        "category": "es6",
        "title": "Генератор візитки користувача",
        "description": "Створіть функцію, яка приймає об'єкт користувача та повертає багаторядковий текст візитки, сформований за допомогою шаблонних рядків (косих лапок `).",
        "instructions": [
            "Функція приймає один об'єкт користувача з полями name, role та company",
            "Використовуйте шаблонні рядки (Template Literals) у косих лапках для створення тексту",
            "Текст повинен складатися з трьох рядків, розділених переносом рядка",
            "Формат першого рядка: 'Name: [ім'я]'",
            "Формат другого рядка: 'Position: [роль]'",
            "Формат третього рядка: 'Company: [компанія]'"
        ],
        "example": "createBusinessCard({ name: 'Олег', role: 'Developer', company: 'SoftServe' }) → 'Name: Олег\\nPosition: Developer\\nCompany: SoftServe'",
        "expectedOutput": null,
        "starterCode": "'use strict';\n\nconst createBusinessCard = (user) => {\n  // Створіть шаблонний рядок\n};",
        "difficulty": "easy",
        "functionName": "createBusinessCard",
        "tests": [
            {
                "input": [
                    { "name": "Олег", "role": "Developer", "company": "SoftServe" }
                ],
                "expected": "Name: Олег\nPosition: Developer\nCompany: SoftServe"
            },
            {
                "input": [
                    { "name": "Анна", "role": "Designer", "company": "Google" }
                ],
                "expected": "Name: Анна\nPosition: Designer\nCompany: Google"
            }
        ],
        "theory": {
            "title": "Шаблонні рядки (Template Literals)",
            "content": "Шаблонні рядки в ES6+ створюються за допомогою зворотних косих лапок (`). Вони дозволяють інтерполювати (вставляти) змінні та вирази прямо всередину рядка за допомогою конструкції ${вираз}. Також вони підтримують багаторядковість без використання символу \\n.",
            "example": "const name = 'Іван';\nconst greet = `Привіт,\nмене звати ${name}!`;"
        },
        "hints": [
            "Використовуйте косі лапки ` замість звичайних.",
            "Перенесіть рядки в коді точно так само, як вони мають виглядати в результаті.",
            "Вставляйте значення через ${user.name}, ${user.role} та ${user.company}."
        ],
        "solution": "'use strict';\n\nconst createBusinessCard = (user) => {\n  return `Name: ${user.name}\nPosition: ${user.role}\nCompany: ${user.company}`;\n};"
    },

    {
        "id": 42,
        "category": "es6",
        "title": "Конвертер валют у стрілочному стилі",
        "description": "Перепишіть функцію конвертації валюти, використовуючи синтаксис стрілочних функцій ES6+. Функція повинна бути максимально лаконічною (в один рядок) без використання ключового слова return та фігурних дужок.",
        "instructions": [
            "Створіть стрілочну функцію convertCurrency",
            "Функція приймає два параметри: amount (сума) та rate (курс валюти)",
            "Використовуйте скорочений синтаксис (implicit return) в один рядок",
            "Функція повинна помножити суму на курс і повернути результат"
        ],
        "example": "convertCurrency(100, 41.5) → 4150",
        "expectedOutput": null,
        "starterCode": "'use strict';\n\n// Перепишіть у вигляді стрілочної функції в один рядок\nconst convertCurrency = ",
        "difficulty": "easy",
        "functionName": "convertCurrency",
        "tests": [
            {
                "input": [100, 41.5],
                "expected": 4150
            },
            {
                "input": [20, 42.0],
                "expected": 840
            },
            {
                "input": [0, 36.5],
                "expected": 0
            }
        ],
        "theory": {
            "title": "Стрілочні функції (Arrow Functions)",
            "content": "Стрілочні функції в ES6+ мають коротший синтаксис порівняно зі звичайними функціями. Якщо тіло функції складається лише з одного виразу, фігурні дужки { } та ключове слово return можна опустити — значення цього виразу повернеться автоматично.",
            "example": "const multiply = (a, b) => a * b;\n// Це те саме, що: const multiply = function(a, b) { return a * b; };"
        },
        "hints": [
            "Синтаксис стрілочної функції для двох аргументів: (param1, param2) => вираз",
            "Не пишіть фігурні дужки { } після стрілки =>, інакше автоповернення значення не спрацює.",
            "Формула для розрахунку: amount * rate."
        ],
        "solution": "'use strict';\n\nconst convertCurrency = (amount, rate) => amount * rate;"
    }
];