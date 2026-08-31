export const challenges = [
    {
        id: 31,
        category: 'objects',
        title: "Створення об'єкта",
        description: "Створіть об'єкт, що описує позицію меню. Додайте властивості: name, price, category. Поверніть цей об'єкт.",
        instructions: [
            'Створіть об\'єкт menuItems з трьома властивостями',
            'name — назва страви (рядок)',
            'price — ціна в гривнях (число)',
            'category — категорія (рядок)',
            'Поверніть створений об\'єкт'
        ],
        example: 'Створено об\'єкт: { name: "Борщ", price: 120, category: "Перші страви" }',
        expectedOutput: null,
        starterCode: "'use strict';\n\n// Створіть об'єкт, що описує позицію меню\n",
        difficulty: 'easy',
        functionName: 'createMenuItem',
        tests: [
            {
                input: ['Піца', 250, 'Гаряче'],
                expected: { name: 'Піца', price: 250, category: 'Гаряче' }
            },
            {
                input: ['Салат', 85, 'Холодне'],
                expected: { name: 'Салат', price: 85, category: 'Холодне' }
            },
            {
                input: ['Кава', 60, 'Напої'],
                expected: { name: 'Кава', price: 60, category: 'Напої' }
            }
        ],
        theory: {
            title: "Об'єкти в JavaScript",
            content: "Об'єкт — це колекція пар \"ключ: значення\" у фігурних дужках {}. Кожна пара називається властивістю. Для доступу до значення використовуйте крапку: obj.key або obj[\"key\"]. Для створення об'єкта використовуйте {}. Об'єкти передаються за посиланням, а не за значенням.",
            example: "const order = {\n  dish: \"Борщ\",\n  price: 120,\n  quantity: 2\n};\n\norder.dish;    // \"Борщ\"\norder[\"price\"]; // 120"
        },
        hints: [
            'Об\'єкт створюється через фігурні дужки {} з парами \"ключ: значення\" всеред.',
            'Доступ до властивості: об\'єкт.key або об\'єкт[\"key\"].',
            'return { name: \"Піца\", price: 250, category: \"Гаряче\" };'
        ],
        solution: "'use strict';\n\nconst createMenuItem = (name, price, category) => {\n  return {\n    name: name,\n    price: price,\n    category: category\n  };\n};"
    },

    {
        id: 32,
        category: 'objects',
        title: "Зміна властивостей об'єкта",
        description: "Прийміть об'єкт замовлення та змініть його властивості: збільште кількість та додайте статус \"доступне\".",
        instructions: [
            'Функція приймає об\'єкт замовлення',
            'Збільште quantity на 1',
            'Додайте нову властивість available: true',
            'Поверніть змінений об\'єкт'
        ],
        example: 'updateOrder({ dish: "Борщ", quantity: 2, price: 120 })\n→ { dish: "Борщ", quantity: 3, price: 120, available: true }',
        expectedOutput: null,
        starterCode: "'use strict';\n\nconst updateOrder = (order) => {\n  // Змініть об'єкт замовлення\n};",
        difficulty: 'easy',
        functionName: 'updateOrder',
        tests: [
            {
                input: [{ dish: 'Борщ', quantity: 2, price: 120 }],
                expected: { dish: 'Борщ', quantity: 3, price: 120, available: true }
            },
            {
                input: [{ dish: 'Кава', quantity: 1, price: 60 }],
                expected: { dish: 'Кава', quantity: 2, price: 60, available: true }
            },
            {
                input: [{ dish: 'Стейк', quantity: 1, price: 350, available: false }],
                expected: { dish: 'Стейк', quantity: 2, price: 350, available: true }
            }
        ],
        theory: {
            title: "Зміна властивостей об'єкта",
            content: "Властивості об'єкта можна змінювати після створення. Використовуйте крапку для зміни: obj.key = newValue. Це замінює існуюче значення. Можна додавати нові властивості просто присвоювання: obj.newKey = value.",
            example: "const order = { dish: \"Борщ\", quantity: 2 };\norder.quantity = 3;\norder.available = true;"
        },
        hints: [
            'order.quantity = order.quantity + 1 — це збільшить quantity на 1.',
            'order.available = true — це додає нову властивість.',
            'order.quantity = order.quantity + 1;\norder.available = true;\nreturn order;'
        ],
        solution: "'use strict';\n\nconst updateOrder = (order) => {\n  order.quantity = order.quantity + 1;\n  order.available = true;\n  return order;\n};"
    },

    {
        id: 33,
        category: 'objects',
        title: "Ітерація по об'єкту",
        description: "Проітеруйте по всіх позиціях меню і порахуйте загальну вартість.",
        instructions: [
            'Функція приймає об\'єкт menu, де ключі — назви страв, а значення — об\'єкти з полями name та price',
            'Використовуйте цикл for...in для ітерації',
            'Додайте ціну кожної страви до загальної суми',
            'Поверніть загальну вартість'
        ],
        example: 'countMenuTotal({ "Борщ": 120, "Салат": 85, "Кава": 60 }) → 265',
        expectedOutput: null,
        starterCode: "'use strict';\n\nconst countMenuTotal = (menu) => {\n  // Порахуйте загальну вартість\n};",
        difficulty: 'easy',
        functionName: 'countMenuTotal',
        tests: [
            {
                input: [{ "Борщ": 120, "Салат": 85, "Кава": 60 }],
                expected: 265
            },
            {
                input: [{ "Піца": 250, "Паста": 180, "Десерт": 150 }],
                expected: 580
            },
            {
                input: [{ "Суп": 90, "Комбо": 110 }],
                expected: 200
            },
            {
                input: [{}],
                expected: 0
            }
        ],
        theory: {
            title: "Цикл for...in",
            content: "for...in ітерує по всіх ключах об'єкта (власні + успадковані з прототипу). На кожній ітерації key містить ім'я властивості як рядок. Для перевірки \"власна чи успадкована\" використовуйте obj.hasOwnProperty(key). Значення отримайте через obj[key].",
            example: "const menu = { \"Борщ\": 120, \"Салат\": 85 };\nlet total = 0;\n\nfor (const key in menu) {\n  if (menu.hasOwnProperty(key)) {\n    total += menu[key];\n  }\n}\nconsole.log(total); // 205"
        },
        hints: [
            'for (const key in menu) { ... } — ітерує по всіх ключах об\'єкта.',
            'menu[key] дає доступ до значення. menu.hasOwnProperty(key) перевіряє, чи це власна властивість.',
            "let total = 0;\nfor (const key in menu) {\n  if (menu.hasOwnProperty(key)) {\n    total += menu[key];\n  }\n}\nreturn total;"
        ],
        solution: "'use strict';\n\nconst countMenuTotal = (menu) => {\n  let total = 0;\n  for (const key in menu) {\n    if (menu.hasOwnProperty(key)) {\n      total += menu[key];\n    }\n  }\n  return total;\n};"
    },

    {
        id: 34,
        category: 'objects',
        title: "Ключі об'єкта",
        description: "Отримайте всі назви страв з об'єкта як масив.",
        instructions: [
            'Функція приймає об\'єкт меню',
            'Використовуйте Object.keys() щоб отримати масив ключів',
            'Поверніть масив назв страв',
            'Використовуйте .sort() для алфавітного порядку'
        ],
        example: 'getDishNames({ "Борщ": 120, "Салат": 85, "Кава": 60 }) → ["Борщ", "Кава", "Салат"]',
        expectedOutput: null,
        starterCode: "'use strict';\n\nconst getDishNames = (menu) => {\n  // Отримайте відсортовані назви страв\n};",
        difficulty: 'easy',
        functionName: 'getDishNames',
        tests: [
            {
                input: [{ "Борщ": 120, "Салат": 85, "Кава": 60 }],
                expected: ["Борщ", "Кава", "Салат"]
            },
            {
                input: [{ "Стейк": 350, "Паста": 180, "Десерт": 150 }],
                expected: ["Десерт", "Паста", "Стейк"]
            },
            {
                input: [{ "Суп": 90 }],
                expected: ["Суп"]
            },
            {
                input: [{ a: 1, b: 2 }],
                expected: ["a", "b"]
            }
        ],
        theory: {
            title: "Object.keys()",
            content: "Object.keys(obj) повертає масив усіх власних ключів об'єкта як рядки. Результат — масив рядків. Метод не включає успадковані властивості з прототипу (наприклад, toString). Для сортування використовуйте .sort().",
            example: "const menu = { \"Борщ\": 120, \"Салат\": 85 };\n\nObject.keys(menu);  // [\"Борщ\", \"Салат\"]\nObject.keys(menu).sort();  // [\"Борщ\", \"Салат\"]"
        },
        hints: [
            'Object.keys(menu) повертає масив ключів: ["Борщ", "Салат", "Кава"].',
            'Для сортування додайте .sort() після Object.keys().',
            'return Object.keys(menu).sort();'
        ],
        solution: "'use strict';\n\nconst getDishNames = (menu) => {\n  return Object.keys(menu).sort();\n};"
    },

    {
        id: 35,
        category: 'objects',
        title: "Значення об'єкта",
        description: "Отримайте всі значення з об'єкта як масив.",
        instructions: [
            'Функція приймає об\'єкт замовлення',
            'Використовуйте Object.values() щоб отримати масив значень',
            'Поверніть масив числових значень',
            'Ігноруйте нечислові значення'
        ],
        example: 'getOrderPrices({ "Борщ": 120, "Салат": 85, "Кава": 60 }) → [120, 85, 60]',
        expectedOutput: null,
        starterCode: "'use strict';\n\nconst getOrderPrices = (order) => {\n  // Отримайте масив лише числових значень\n};",
        difficulty: 'easy',
        functionName: 'getOrderPrices',
        tests: [
            {
                input: [{ "Борщ": 120, "Салат": 85, "Кава": 60 }],
                expected: [120, 85, 60]
            },
            {
                input: [{ "Піца": 250, "Паста": 180, "Десерт": 150 }],
                expected: [250, 180, 150]
            },
            {
                input: [{ "Суп": 90, "Комбо": "200 грн" }],
                expected: [90]
            },
            {
                input: [{ "Борщ": 120, "Салат": null, "Кава": 60 }],
                expected: [120, 60]
            }
        ],
        theory: {
            title: "Object.values()",
            content: "Object.values(obj) повертає масив усіх значень об'єкта. Порядок значень у масиві не гарантується. Для відфільтрації використовуйте .filter().",
            example: "const order = { \"Борщ\": 120, \"Салат\": 85 };\n\nObject.values(order);  // [120, 85]\n\nObject.values(order).filter(v => typeof v === \"number\");  // [120, 85]"
        },
        hints: [
            'Object.values(order) повертає масив значень: [120, 85, 60].',
            'Використовуйте .filter(v => typeof v === "number") щоб відфільтрувати нечислові значення.',
            'return Object.values(order).filter(v => typeof v === \'number\');'
        ],
        solution: "'use strict';\n\nconst getOrderPrices = (order) => {\n  return Object.values(order).filter(v => typeof v === 'number');\n};"
    },

    {
        id: 36,
        category: 'objects',
        title: "Аналіз ресторанного чека",
        description: "На основі масиву страв у замовленні порахуйте загальну вартість їжі, знайдіть середню ціну однієї страви та сформуйте список назв усіх замовлених напоїв.",
        instructions: [
            'Функція приймає масив об\'єктів (страв)',
            'Порахуйте загальну суму всього замовлення',
            'Обчисліть середню вартість однієї позиції у чеку',
            'Знайдіть усі страви з категорією "напій" та поверніть масив їхніх назв (title)',
            'Поверніть об\'єкт: { totalSum, averagePrice, drinks }'
        ],
        example: 'analyzeReceipt([\n  { title: "Борщ", price: 120, type: "їжа" },\n  { title: "Кава", price: 60, type: "напій" },\n  { title: "Узвар", price: 40, type: "напій" }\n]) → { totalSum: 220, averagePrice: 73.33, drinks: ["Кава", "Узвар"] }',
        expectedOutput: null,
        starterCode: "'use strict';\n\nconst analyzeReceipt = (items) => {\n  // Створіть аналіз чека\n};",
        difficulty: 'easy',
        functionName: 'analyzeReceipt',
        tests: [
            {
                input: [
                    { title: "Борщ", price: 120, type: "їжа" },
                    { title: "Кава", price: 60, type: "напій" },
                    { title: "Узвар", price: 40, type: "напій" }
                ],
                expected: { totalSum: 220, averagePrice: 73.33, drinks: ["Кава", "Узвар"] }
            },
            {
                input: [
                    { title: "Стейк", price: 350, type: "їжа" },
                    { title: "Салат", price: 150, type: "їжа" }
                ],
                expected: { totalSum: 500, averagePrice: 250, drinks: [] }
            },
            {
                input: [],
                expected: { totalSum: 0, averagePrice: 0, drinks: [] }
            }
        ],
        theory: {
            title: "Фільтрація та трансформація об'єктів",
            content: "Для вибору об'єктів за певною ознакою використовують метод .filter(). Щоб зібрати з масиву об'єктів лише масив їхніх текстових назв — комбінуйте .filter() із методом .map(). Округлення чисел до сотих виконується за допомогою Math.round(num * 100) / 100 або .toFixed(2).",
            example: "const items = [{ title: 'Сік', type: 'напій' }, { title: 'Суп', type: 'їжа' }];\nconst drinks = items.filter(i => i.type === 'напій').map(i => i.title);"
        },
        hints: [
            'Загальну суму рахуйте через items.reduce((sum, item) => sum + item.price, 0).',
            'Для середньої ціни поділіть загальну суму на items.length. Округляйте до 2 знаків після коми.',
            'Щоб отримати тільки напої: зніміть фільтр items.filter(i => i.type === "напій"), а потім трансформуйте через .map(i => i.title).'
        ],
        solution: "'use strict';\n\nconst analyzeReceipt = (items) => {\n  if (items.length === 0) {\n    return { totalSum: 0, averagePrice: 0, drinks: [] };\n  }\n\n  const totalSum = items.reduce((sum, item) => sum + item.price, 0);\n  const rawAverage = totalSum / items.length;\n  const averagePrice = Math.round(rawAverage * 100) / 100;\n\n  const drinks = items\n    .filter(item => item.type === 'напій')\n    .map(item => item.title);\n\n  return {\n    totalSum,\n    averagePrice,\n    drinks\n  };\n};"
    },

    {
        id: 37,
        category: 'objects',
        title: "Бюджетні страви в меню",
        description: "Знайдіть усі страви в меню, ціна яких є меншою або рівною заданій бюджетній сумі.",
        instructions: [
            "Функція приймає масив страв та число (максимальна ціна)",
            "Використовуйте .filter() для відбору страв за ціною",
            "Поверніть масив знайдених страв (цілі об'єкти)",
            "Якщо жодної страви не знайдено — поверніть порожній масив"
        ],
        "example": "findBudgetDishes(menu, 100) → [{ dish: 'Салат', price: 85, ... }, ...]",
        "expectedOutput": null,
        "starterCode": "'use strict';\n\nconst findBudgetDishes = (menu, maxPrice) => {\n  // Знайдіть всі страви, які вписуються в бюджет\n};",
        "difficulty": "easy",
        "functionName": "findBudgetDishes",
        "tests": [
            {
                "input": [
                    [
                        { "dish": "Борщ", "price": 120, "category": "Перші страви" },
                        { "dish": "Салат", "price": 85, "category": "Холодне" },
                        { "dish": "Кава", "price": 60, "category": "Напої" }
                    ],
                    100
                ],
                "expected": [
                    { "dish": "Салат", "price": 85, "category": "Холодне" },
                    { "dish": "Кава", "price": 60, "category": "Напої" }
                ]
            },
            {
                "input": [
                    [
                        { "dish": "Піца", "price": 250, "category": "Гаряче" },
                        { "dish": "Стейк", "price": 350, "category": "Гаряче" }
                    ],
                    300
                ],
                "expected": [
                    { "dish": "Піца", "price": 250, "category": "Гаряче" }
                ]
            },
            {
                "input": [
                    [
                        { "dish": "Кава", "price": 60, "category": "Напої" },
                        { "dish": "Чай", "price": 45, "category": "Напої" }
                    ],
                    30
                ],
                "expected": []
            }
        ],
        "theory": {
            "title": "Фільтрація масиву об'єктів за числовою умовою",
            "content": "Для відбору елементів за числовими критеріями використовуйте метод .filter() оператори порівняння (<, >, <=, >=). Кожен елемент масиву перевіряється на відповідність умові, і якщо вона істинна (true), об'єкт потрапляє у фінальний масив.",
            "example": "const menu = [\n  { dish: \"Борщ\", price: 120 },\n  { dish: \"Салат\", price: 85 }\n];\n\nmenu.filter(item => item.price <= 100);\n// [{ dish: \"Салат\", price: 85 }]"
        },
        "hints": [
            "menu.filter(item => item.price <= maxPrice) повертає масив страв, які не дорожчі за ліміт.",
            "Перевіряйте властивість price кожного об'єкта в колбек-функції.",
            "return menu.filter(item => item.price <= maxPrice);"
        ],
        "solution": "'use strict';\n\nconst findBudgetDishes = (menu, maxPrice) => {\n  return menu.filter(item => item.price <= maxPrice);\n};"
    }
];