export const challenges = [
    {
        id: 1,
        category: 'basics',
        title: 'Привітання',
        description: 'Використайте prompt() щоб запитати ім\'я користувача, та alert() щоб вивести привітання у форматі: Hello, <ім\'я>! How are you?',
        instructions: [
            'Оголосіть змінну для зберігання імені користувача',
            'Використайте prompt() щоб отримати ім\'я',
            'Використайте alert() щоб вивести привітання, об\'єднавши рядки'
        ],
        example: 'Hello, Оля! How are you?',
        expectedOutput: null,
        starterCode: '\'use strict\';\n\n// Запитайте ім\'я користувача та виведіть привітання',
        difficulty: 'easy',
        theory: {
            title: 'prompt() та alert()',
            content: 'prompt() показує діалогове вікно для вводу тексту користувачем. Функція повертає введене значення (або null, якщо скасовано). alert() показує модальне вікно з повідомленням. Обидві функції є частиною браузерного API, їх не потрібно імпортувати.',
            example: 'const name = prompt("Як вас звати?");\nalert("Привіт, " + name + "!");'
        },
        hints: [
            'prompt() відкриває вікно для вводу. Результат зберігіть у змінну.',
            'alert() показує повідомлення. Об\'єднайте рядки за допомогою оператора + (конкатенація).',
            'const name = prompt("Як вас звати?");\nalert("Hello, " + name + "! How are you?");'
        ],
        solution: '\'use strict\';\n\nconst name = prompt("Як вас звати?");\nalert("Hello, " + name + "! How are you?");'
    },

    {
        id: 2,
        category: 'basics',
        title: 'let та const',
        description: 'Створіть змінні для опису замовлення в кафе. Використовуйте const для незмінних значень і let для того, що може змінитися. Додайте коментарі, що пояснюють ваш вибір.',
        instructions: [
            'Оголосіть назву страви, ціну та порцію використовуючи const',
            'Оголосіть кількість порцій та загальну суму використовуючи let',
            'Додайте коментарі // чому обрано саме let або const',
            'Виведіть усі змінні в консоль через console.log()'
        ],
        example: null,
        expectedOutput: null,
        starterCode: '// Оголосіть змінні для замовлення\n// Використовуйте const для незмінних значень\n// Використовуйте let для того, що може змінюватися\n\n// Виведіть усі змінні в консоль',
        difficulty: 'easy',
        theory: {
            title: 'let та const',
            content: 'let оголошує змінну, яку можна переприсвоїти пізніше. const оголошує змінну, яку НЕ можна переприсвоїти — це призводить до помилки при спробі. Використовуйте const для значень, що не змінюються, і let — для тих, що можуть.',
            example: 'let portions = 2;   // можна змінити\nportions = 3;        // працює\n\nconst dish = "Борщ";  // помилка при переприсвоєнні\ndish = "Суп";          // TypeError'
        },
        hints: [
            'Подумайте, які значення замовлення незмінні (назва, ціна), а які можуть змінитися (кількість порцій).',
            'const — для незмінних значень. let — для змінних. Наприклад: const dish = "Борщ" (назва не зміниться), let portions = 2 (кількість може змінитися).',
            'Оголосіть: const dishName = "Борщ", const price = 180; let portions = 2; let total = price * portions;'
        ],
        solution: 'const dishName = "Борщ";\nconst price = 180;\nlet portions = 2; // може змінитися\n\nlet total = price * portions;\n\nconsole.log("Страва:", dishName);\nconsole.log("Ціна:", price, "грн");\nconsole.log("Кількість:", portions);\nconsole.log("Сума:", total, "грн");'
    },

    {
        id: 3,
        category: 'basics',
        title: 'Типи даних',
        description: 'Створіть змінні різних типів даних та використайте typeof, щоб визначити їх тип. Запишіть результати в консоль.',
        instructions: [
            'Створіть змінну типу string',
            'Створіть змінну типу number',
            'Створіть змінну типу boolean',
            'Створіть змінну зі значенням null та undefined',
            'Виведіть typeof для кожної змінної через console.log()'
        ],
        example: 'typeof "Борщ" → "string"\ntypeof 42 → "number"\ntypeof true → "boolean"\ntypeof null → "object"\ntypeof undefined → "undefined"',
        expectedOutput: null,
        starterCode: '// Створіть змінні різних типів\n// Використайте typeof для кожної\n\n// Приклад:\n// const dish = "Борщ";\n// console.log(typeof dish);',
        difficulty: 'easy',
        theory: {
            title: 'Оператор typeof',
            content: 'typeof повертає тип значення у вигляді рядка. Повертає "string", "number", "boolean", "object", "function", "undefined". Особливість: typeof null повертає "object" — це відомий нюанс JavaScript.',
            example: 'typeof "hello"  // "string"\ntypeof 42        // "number"\ntypeof true       // "boolean"\ntypeof undefined // "undefined"\ntypeof null       // "object" ⚠️'
        },
        hints: [
            'Створіть кілька змінних з різними значеннями: рядок, число, логічне значення, null, undefined.',
            'typeof повертає рядок з назвою типу. Спробуйте: console.log(typeof "Борщ").',
            'Зверніть увагу на typeof null — він повертає "object", а не "null". Це особливість мови, яку варто знати.'
        ],
        solution: 'const dish = "Борщ";\nconst price = 180;\nconst isAvailable = true;\nconst rating = null;\nconst address = undefined;\n\nconsole.log(typeof dish);       // "string"\nconsole.log(typeof price);      // "number"\nconsole.log(typeof isAvailable); // "boolean"\nconsole.log(typeof rating);     // "object"\nconsole.log(typeof address);    // "undefined"'
    },

    {
        id: 4,
        category: 'basics',
        title: 'Арифметичні оператори',
        description: 'Напишіть функцію, яка обчислює загальну суму замовлення: ціна помножена на кількість, плюс чайові відсотки.',
        instructions: [
            'Функція приймає три аргументи: price, quantity, tipPercent',
            'Обчисліть підсумок: price * quantity',
            'Обчисліть чайові: підсумок * (tipPercent / 100)',
            'Поверніть загальну суму'
        ],
        example: 'calculateBill(180, 2, 10) → 396',
        expectedOutput: '396',
        starterCode: 'const calculateBill = (price, quantity, tipPercent) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'calculateBill',
        tests: [
            {
                input: [180, 2, 10],
                expected: 396
            },
            {
                input: [250, 3, 15],
                expected: 862.5
            },
            {
                input: [100, 0, 10],
                expected: 0
            }
        ],
        theory: {
            title: 'Арифметичні оператори',
            content: 'JavaScript підтримує стандартні математичні оператори: + (додавання), - (віднімання), * (множення), / (ділення), % (остача від ділення). Результат % завжди число. Пріоритет операторів: *, /, % обчислюються перед +, -. Для явного контролю порядку використовуйте дужки ().',
            example: '10 + 5    // 15\n10 - 3    // 7\n10 * 2    // 20\n10 / 3    // 3.333...\n10 % 3    // 1\n\n(2 + 3) * 4  // 20'
        },
        hints: [
            'Загальна сума = підсумок + чайові. Спочатку обчисліть підсумок (ціна × кількість).',
            'Чайові = підсумок × (відсоток / 100). Додайте їх разом і поверніть результат.',
            'return (price * quantity) + (price * quantity * tipPercent / 100);'
        ],
        solution: 'const calculateBill = (price, quantity, tipPercent) => {\n    const subtotal = price * quantity;\n    const tip = subtotal * (tipPercent / 100);\n    return subtotal + tip;\n};'
    },

    {
        id: 5,
        category: 'basics',
        title: 'Рядки та шаблони',
        description: 'Використовуючи змінні та шаблонні літери (template literals), створіть рядок з описом замовлення.',
        instructions: [
            'Змінні вже оголошені: dish, portion, price',
            'Використовуйте `` (зворотні лапки) для створення рядка з підстановкою значень',
            'Результат повинен виглядати так: "Страва: Борщ, Кількість: 2, Ціна: 180 грн"',
            'Виведіть результат через console.log()'
        ],
        example: 'Страва: Борщ, Кількість: 2, Ціна: 180 грн',
        expectedOutput: null,
        starterCode: 'const dish = "Борщ";\nconst portion = 2;\nconst price = 180;\n\n// Створіть рядок-опис замовлення використовуючи шаблонні літери',
        difficulty: 'easy',
        theory: {
            title: 'Шаблонні літери (Template Literals)',
            content: 'Шаблонні літери дозволяють вставляти значення змінних прямо в рядок. Використовуються зворотні лапки `` замість звичайних лапок "". Всеред змінної ставиться ${}. Це зручніше і читабельніше, ніж конкатенація через +.',
            example: 'const name = "Борщ";\nconst price = 180;\n\n// Шаблонний літерал:\n`Страва: ${name}, Ціна: ${price} грн`\n\n// Те саме через конкатенацію:\n"Страва: " + name + ", Ціна: " + price + " грн"'
        },
        hints: [
            'Шаблонні літери використовують зворотні лапки `` замість звичайних "". Всеред змінної ставте ${}.',
            'Об\'єднайте текст і змінні в один рядок: `Страва: ${dish}, Кількість: ${portion}, Ціна: ${price} грн`',
            'Не забудьте вивести результат: console.log(\`Страва: ${dish}, Кількість: ${portion}, Ціна: ${price} грн\`);'
        ],
        solution: 'const dish = "Борщ";\nconst portion = 2;\nconst price = 180;\n\nconst description = `Страва: ${dish}, Кількість: ${portion}, Ціна: ${price} грн`;\n\nconsole.log(description);'
    },

    {
        id: 6,
        category: 'basics',
        title: 'Порівняння',
        description: 'Напишіть функцію, яка перевіряє, чи вистачить достатньо коштів для оплати замовлення.',
        instructions: [
            'Функція приймає два аргументи: balance (наявні кошти) та total (сума замовлення)',
            'Поверніть true, якщо balance >= total',
            'Поверніть false, якщо balance < total'
        ],
        example: 'canAfford(500, 360) → true\ncanAfford(200, 360) → false',
        expectedOutput: null,
        starterCode: 'const canAfford = (balance, total) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'canAfford',
        tests: [
            {
                input: [500, 360],
                expected: true
            },
            {
                input: [500, 500],
                expected: true
            },
            {
                input: [200, 360],
                expected: false
            },
            {
                input: [0, 0],
                expected: true
            }
        ],
        theory: {
            title: 'Оператори порівняння',
            content: 'JavaScript має оператори для порівняння: === (рівність), !== (нерівність), > (більше), < (менше), >= (більше або рівно), <= (менше або рівно). Оператори === та !== перевіряють і значення, і тип даних. Наприклад, 1 === "1" поверне false (різні типи). Для порівняння лише значень використовуйте == (без суворого типу не рекомендується).',
            example: '5 > 3      // true\n5 < 3      // false\n5 >= 5     // true\n5 === 5     // true\n5 !== 3     // true\n5 === "5"   // false ⚠️'
        },
        hints: [
            'Порівняйте balance з total. Який оператор перевіряє "більше або рівно"?',
            'Використовуйте >= щоб дозволити оплату, коли коштів достатньо. Поверніть результат порівняння без if.',
            'return balance >= total;'
        ],
        solution: 'const canAfford = (balance, total) => {\n    return balance >= total;\n};'
    },

    {
        id: 7,
        category: 'basics',
        title: 'Умови',
        description: 'Напишіть функцію, яка застосовує знижку до суми замовлення залежно від її розміру.',
        instructions: [
            'Функція приймає загальну суму (total)',
            'Якщо total > 1000 — знижка 15%',
            'Якщо total > 500 — знижка 10%',
            'Інакше — без знижки',
            'Поверніть фінальну суму після знижки'
        ],
        example: 'applyDiscount(1200) → 1020\napplyDiscount(600) → 540\napplyDiscount(200) → 200',
        expectedOutput: null,
        starterCode: 'const applyDiscount = (total) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'applyDiscount',
        tests: [
            {
                input: [1200],
                expected: 1020
            },
            {
                input: [600],
                expected: 540
            },
            {
                input: [200],
                expected: 200
            },
            {
                input: [1000],
                expected: 1000
            },
            {
                input: [1001],
                expected: 900.9
            }
        ],
        theory: {
            title: 'if / else if / else',
            content: 'Умовний оператор if виконує блок коду, якщо умова — true. else if додає альтернативну умову. else виконується, якщо жодна з умов не виконалася. Кожен блок закривається фігурними дужками {}.',
            example: 'const score = 75;\n\nif (score >= 90) {\n    console.log("Відмінно");\n} else if (score >= 70) {\n    console.log("Добре");\n} else {\n    console.log "Спробуй ще";\n}'
        },
        hints: [
            'Використовуйте if / else if / else для трьох діапазонів суми. Перевірте спочатку найбільшу умову (> 1000).',
            'Обчисліть знижку: discount = total * 0.15 (або 0.10, або 0). Поверніть total - discount.',
            'if (total > 1000) { discount = total * 0.15; }\nelse if (total > 500) { discount = total * 0.10; }\nreturn total - discount;'
        ],
        solution: 'const applyDiscount = (total) => {\n    let discount = 0;\n\n    if (total > 1000) {\n        discount = total * 0.15;\n    } else if (total > 500) {\n        discount = total * 0.10;\n    }\n\n    return total - discount;\n};'
    },

    {
        id: 8,
        category: 'basics',
        title: 'Тернарний оператор',
        description: 'Напишіть функцію, яка повертає розмір замовлення на основі кількості порцій.',
        instructions: [
            'Функція приймає quantity (кількість порцій)',
            'Менше 3 — "Мала"',
            'Від 3 до 5 — "Середня"',
            'Більше 5 — "Велика"'
        ],
        example: 'getOrderSize(2) → "Мала"\ngetOrderSize(4) → "Середня"\ngetOrderSize(8) → "Велика"',
        expectedOutput: 'Середня',
        starterCode: 'const getOrderSize = (quantity) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'getOrderSize',
        tests: [
            {
                input: [2],
                expected: 'Мала'
            },
            {
                input: [3],
                expected: 'Мала'
            },
            {
                input: [4],
                expected: 'Середня'
            },
            {
                input: [5],
                expected: 'Середня'
            },
            {
                input: [6],
                expected: 'Велика'
            },
            {
                input: [0],
                expected: 'Мала'
            }
        ],
        theory: {
            title: 'Тернарний оператор',
            content: 'Тернарний оператор — це скорочений запис if/else. Синтаксис: умова ? значення_якщо_true : значення_якщо_false. Підходить для простих умов, де if/else займає забагато місця. Не використовуйте для складних умов або вкладених тернарних операторів.',
            example: 'const age = 20;\n\n// Тернарний:\nconst status = age >= 18 ? "дорослий" : "неповнолітній";\n\n// Те саме через if/else:\nlet status;\nif (age >= 18) {\n    status = "дорослий";\n} else {\n    status = "неповнолітній";\n}'
        },
        hints: [
            'Тернарний оператор: умова ? значення1 : значення2. Спробуйте: quantity < 3 ? "Мала" : ...',
            'Додайте ще одну перевірку: quantity >= 3 && quantity <= 5 ? "Середня" : "Велика". Порядок умов важливий!',
            'return quantity < 3 ? "Мала" : (quantity <= 5 ? "Середня" : "Велика");'
        ],
        solution: 'const getOrderSize = (quantity) => {\n    return quantity < 3 ? "Мала" : (quantity <= 5 ? "Середня" : "Велика");\n};'
    },

    {
        id: 9,
        category: 'basics',
        title: 'Категорія страви',
        description: 'Напишіть функцію, яка визначає категорію страви за її типом. Використовуйте switch для цього.',
        instructions: [
            'Функція приймає один аргумент: тип страви (рядок)',
            'Піца та бургер → "Гаряче"',
            'Салат та десерт → "Холодне"',
            'Напій та кава → "Напій"',
            'Усі інші → "Інше"'
        ],
        example: 'getDishCategory("піца") → "Гаряче"\ngetDishCategory("салат") → "Холодне"\ngetDishCategory("кава") → "Напій"',
        expectedOutput: null,
        starterCode: 'const getDishCategory = (type) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'getDishCategory',
        tests: [
            {
                input: ['піца'],
                expected: 'Гаряче'
            },
            {
                input: ['бургер'],
                expected: 'Гаряче'
            },
            {
                input: ['салат'],
                expected: 'Холодне'
            },
            {
                input: ['десерт'],
                expected: 'Холодне'
            },
            {
                input: ['кава'],
                expected: 'Напій'
            },
            {
                input: ['суп'],
                expected: 'Інше'
            }
        ],
        theory: {
            title: 'switch / case / break / default',
            content: 'switch порівнює значення з кількома варіантами через case. Кожен case завершується break, щоб зупинити перевірку. default виконається, якщо жоден case не співпав. Без break виконається продовжиться далі — це часта помилка новачків.',
            example: 'const day = "понеділок";\n\nswitch (day) {\n    case "понеділок":\n        console.log("Робочий день");\n        break;\n    case "субота":\n        console.log("Вихідний");\n        break;\n    default:\n        console.log("Звичайний день");\n}'
        },
        hints: [
            'switch приймає значення і порівнює його з кожним case. Використовуйте case для кожного типу страви.',
            'Не забудьте break після кожного case! Без нього виконається продовжиться до наступного case.',
            'switch (type) {\n    case "піцa":\n    case "бургер":\n        return "Гаряче";\n    case "салат":\n    case "десерт":\n        return "Холодне";\n    case "напій":\n    case "кава":\n        return "Напій";\n    default:\n        return "Інше";\n}'
        ],
        solution: 'const getDishCategory = (type) => {\n    switch (type) {\n        case "піцa":\n        case "бургер":\n            return "Гаряче";\n        case "салат":\n        case "десерт":\n            return "Холодне";\n        case "напій":\n        case "кава":\n            return "Напій";\n        default:\n            return "Інше";\n    }\n};'
    },

    {
        id: 10,
        category: 'basics',
        title: 'Замовлення',
        description: 'Створіть функцію для розрахунку замовлення в кафе. Об\'єднайте кілька попередніх концептів: змінні, арифметика, порівняння, умови та шаблонні літери.',
        instructions: [
            'Функція приймає: dish (рядок), price (число), quantity (число), tipPercent (число)',
            'Обчисліть підсумок: price * quantity',
            'Обчисліть чайові: підсумок * (tipPercent / 100)',
            'Обчисліть загальну суму: підсумок + чайові',
            'Якщо загальна сума > 500 — застосуйте знижку 10%',
            'Поверніть об\'єкт з полями: dish, quantity, subtotal, tip, total, discount, finalTotal'
        ],
        example: 'calculateOrder("Стейк", 350, 3, 15)\n→ { total: 1207.5, discount: 120.75, finalTotal: 1086.75 }',
        expectedOutput: null,
        starterCode: 'const calculateOrder = (dish, price, quantity, tipPercent) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'calculateOrder',
        tests: [
            {
                input: ['Борщ', 180, 2, 10],
                expected: { dish: 'Борщ', quantity: 2, subtotal: 360, tip: 36, total: 396, discount: 0, finalTotal: 396 }
            },
            {
                input: ['Стейк', 350, 3, 15],
                expected: { dish: 'Стейк', quantity: 3, subtotal: 1050, tip: 157.5, total: 1207.5, discount: 120.75, finalTotal: 1086.75 }
            },
            {
                input: ['Салат', 120, 1, 0],
                expected: { dish: 'Салат', quantity: 1, subtotal: 120, tip: 0, total: 120, discount: 0, finalTotal: 120 }
            },
            {
                input: ['Кава', 80, 5, 5],
                expected: { dish: 'Кава', quantity: 5, subtotal: 400, tip: 20, total: 420, discount: 0, finalTotal: 420 }
            }
        ],
        theory: {
            title: 'Об\'єкти',
            content: 'Об\'єкт — це колекція пар "ключ: значення" у фігурних дужках {}. Дозволяє групувати пов\'язані дані. Доступ до значень через крапку: obj.key. Для створення об\'єкта використовуйте {}. Кожна пара ключ: значення називається властивістю об\'єкта. Об\'єкти передаються за посиланням, не за значенням.',
            example: 'const order = {\n    dish: "Борщ",\n    price: 180,\n    quantity: 2\n};\n\nconsole.log(order.dish);   // "Борщ"\nconsole.log(order["price"]); // 180\norder.quantity = 3;     // змінює значення'
        },
        hints: [
            'Створіть об\'єкт результату з полями: dish, quantity, subtotal, tip, total, discount, finalTotal. Обчисліть кожне поле по кроках.',
            'discount: if (total > 500) { discount = total * 0.1; } else { discount = 0; }',
            'return {\n    dish,\n    quantity,\n    subtotal: price * quantity,\n    tip: subtotal * (tipPercent / 100),\n    total: subtotal + tip,\n    discount,\n    finalTotal: total - discount\n};'
        ],
        solution: 'const calculateOrder = (dish, price, quantity, tipPercent) => {\n    const subtotal = price * quantity;\n    const tip = subtotal * (tipPercent / 100);\n    const total = subtotal + tip;\n\n    let discount = 0;\n    if (total > 500) {\n        discount = total * 0.1;\n    }\n\n    return {\n        dish: dish,\n        quantity: quantity,\n        subtotal: subtotal,\n        tip: tip,\n        total: total,\n        discount: discount,\n        finalTotal: total - discount\n    };\n};'
    }
];