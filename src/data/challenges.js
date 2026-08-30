export const categoryNames = {
    basics: 'Основи',
    arrays: 'Масиви',
    functions: 'Функції',
    objects: "Об'єкти",
    es6: 'ES6+',
    async: 'Async JavaScript'
};

export const categoryOrder = ['basics', 'arrays', 'functions', 'objects', 'es6', 'async'];

export const challenges = [

    // ==========================================
    // ОСНОВИ — 10 завдань
    // ==========================================

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
    },

    // ==========================================
    // МАСИВИ — 7 завдань
    // ==========================================

    {
        id: 11,
        category: 'arrays',
        title: 'Основи масивів',
        description: 'Напишіть функцію, яка приймає масив страв меню та повертає об\'єкт із назвою першої страви, останньої страви та кількістю страв.',
        instructions: [
            'Отримайте перший елемент масиву за індексом 0',
            'Отримайте останній елемент масиву за індексом menu.length - 1',
            'Отримайте кількість елементів через menu.length',
            'Поверніть об\'єкт { first, last, count }'
        ],
        example: 'getMenuInfo(["Борщ", "Салат", "Піца"]) → { first: "Борщ", last: "Піца", count: 3 }',
        expectedOutput: null,
        starterCode: 'const getMenuInfo = (menu) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'getMenuInfo',
        tests: [
            {
                input: [['Борщ', 'Салат', 'Піца']],
                expected: { first: 'Борщ', last: 'Піца', count: 3 }
            },
            {
                input: [['Кава']],
                expected: { first: 'Кава', last: 'Кава', count: 1 }
            },
            {
                input: [['Суп', 'Стейк', 'Десерт', 'Кава']],
                expected: { first: 'Суп', last: 'Кава', count: 4 }
            }
        ],
        theory: {
            title: 'Масиви: створення та доступ',
            content: 'Масив — це впорядкована колекція значень. Створюється через квадратні дужки []. Елементи нумеруються з нуля — це називається zero-based indexing. Доступ до елемента через квадратні дужки з індексом: arr[0] — перший, arr[1] — другий. Властивість .length повертає кількість елементів. Останній елемент: arr[arr.length - 1].',
            example: 'const menu = ["Борщ", "Салат", "Піца"];\n\nmenu[0];                // "Борщ" (перший)\nmenu[2];                // "Піца" (останній)\nmenu.length;            // 3\nmenu[menu.length - 1];  // "Піца"'
        },
        hints: [
            'Перший елемент масиву має індекс 0: menu[0]. Останній елемент — menu[menu.length - 1].',
            'Створіть об\'єкт із трьома полями та поверніть його: { first: ..., last: ..., count: ... }',
            'return {\n    first: menu[0],\n    last: menu[menu.length - 1],\n    count: menu.length\n};'
        ],
        solution: 'const getMenuInfo = (menu) => {\n    return {\n        first: menu[0],\n        last: menu[menu.length - 1],\n        count: menu.length\n    };\n};'
    },

    {
        id: 12,
        category: 'arrays',
        title: 'Цикл for та масиви',
        description: 'Напишіть функцію, яка обчислює загальну вартість замовлення — суму всіх цін у масиві.',
        instructions: [
            'Створіть змінну total зі значенням 0',
            'Використайте цикл for для перебору масиву цін',
            'Додавайте кожну ціну до total на кожній ітерації',
            'Поверніть total'
        ],
        example: 'sumPrices([120, 180, 90]) → 390',
        expectedOutput: null,
        starterCode: 'const sumPrices = (prices) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'sumPrices',
        tests: [
            {
                input: [[120, 180, 90]],
                expected: 390
            },
            {
                input: [[250]],
                expected: 250
            },
            {
                input: [[50, 50, 50, 50]],
                expected: 200
            },
            {
                input: [[]],
                expected: 0
            }
        ],
        theory: {
            title: 'Цикл for',
            content: 'Цикл for дозволяє повторювати блок коду задану кількість разів. Синтаксис: for (початок; умова; крок) { тіло }. Для перебору масиву: початок — let i = 0, умова — i < arr.length, крок — i++. На кожній ітерації arr[i] дає доступ до поточного елемента.',
            example: 'const prices = [120, 180, 90];\nlet sum = 0;\n\nfor (let i = 0; i < prices.length; i++) {\n    sum += prices[i];\n}\n\nconsole.log(sum); // 390'
        },
        hints: [
            'Створіть змінну total = 0. Використайте for (let i = 0; i < prices.length; i++) для перебору масиву.',
            'На кожній ітерації додавайте поточний елемент до total: total += prices[i].',
            'let total = 0;\nfor (let i = 0; i < prices.length; i++) {\n    total += prices[i];\n}\nreturn total;'
        ],
        solution: 'const sumPrices = (prices) => {\n    let total = 0;\n    for (let i = 0; i < prices.length; i++) {\n        total += prices[i];\n    }\n    return total;\n};'
    },

    {
        id: 13,
        category: 'arrays',
        title: 'push() та pop()',
        description: 'Напишіть функцію, яка замінює останнє замовлення у списку: видаляє останнє та додає нове в кінець.',
        instructions: [
            'Використайте pop() щоб видалити останній елемент масиву',
            'Використайте push() щоб додати нове замовлення в кінець',
            'Поверніть змінений масив'
        ],
        example: 'replaceLastOrder(["Борщ", "Салат", "Кава"], "Десерт") → ["Борщ", "Салат", "Десерт"]',
        expectedOutput: null,
        starterCode: 'const replaceLastOrder = (orders, newOrder) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'replaceLastOrder',
        tests: [
            {
                input: [['Борщ', 'Салат', 'Кава'], 'Десерт'],
                expected: ['Борщ', 'Салат', 'Десерт']
            },
            {
                input: [['Піца'], 'Бургер'],
                expected: ['Бургер']
            },
            {
                input: [['Суп', 'Стейк'], 'Паста'],
                expected: ['Суп', 'Паста']
            }
        ],
        theory: {
            title: 'push() та pop()',
            content: 'push() додає елемент в кінець масиву і повертає нову довжину. pop() видаляє останній елемент і повертає його значення. Обидва методи змінюють оригінальний масив (mutation). Якщо масив порожній, pop() поверне undefined і масив залишиться порожнім.',
            example: 'const orders = ["Борщ", "Салат"];\n\norders.push("Кава");  // масив: ["Борщ", "Салат", "Кава"], повертає 3\norders.pop();          // масив: ["Борщ", "Салат"], повертає "Кава"'
        },
        hints: [
            'pop() видаляє і повертає останній елемент. push() додає елемент в кінець масиву. Обидва методи змінюють оригінальний масив.',
            'Викличте pop() на масиві orders, потім push() з новим замовленням. Порядок важливий — спочатку видалити, потім додати.',
            'orders.pop();\norders.push(newOrder);\nreturn orders;'
        ],
        solution: 'const replaceLastOrder = (orders, newOrder) => {\n    orders.pop();\n    orders.push(newOrder);\n    return orders;\n};'
    },

    {
        id: 14,
        category: 'arrays',
        title: 'shift() та unshift()',
        description: 'Напишіть функцію, яка замінює перше замовлення у списку: видаляє перше та додає нове на початок.',
        instructions: [
            'Використайте shift() щоб видалити перший елемент масиву',
            'Використайте unshift() щоб додати нове замовлення на початок',
            'Поверніть змінений масив'
        ],
        example: 'replaceFirstOrder(["Борщ", "Салат", "Кава"], "Стейк") → ["Стейк", "Салат", "Кава"]',
        expectedOutput: null,
        starterCode: 'const replaceFirstOrder = (orders, newOrder) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'replaceFirstOrder',
        tests: [
            {
                input: [['Борщ', 'Салат', 'Кава'], 'Стейк'],
                expected: ['Стейк', 'Салат', 'Кава']
            },
            {
                input: [['Піца'], 'Бургер'],
                expected: ['Бургер']
            },
            {
                input: [['Суп', 'Десерт'], 'Кава'],
                expected: ['Кава', 'Десерт']
            }
        ],
        theory: {
            title: 'shift() та unshift()',
            content: 'unshift() додає елемент на початок масиву і повертає нову довжину. shift() видаляє перший елемент і повертає його значення. Обидва методи змінюють оригінальний масив. На відміну від pop(), shift() переміщує всі інші елементи, тому на великих масивах працює повільніше.',
            example: 'const orders = ["Борщ", "Салат", "Кава"];\n\norders.shift();           // масив: ["Салат", "Кава"], повертає "Борщ"\norders.unshift("Стейк");  // масив: ["Стейк", "Салат", "Кава"], повертає 3'
        },
        hints: [
            'shift() видаляє і повертає перший елемент. unshift() додає елемент на початок масиву. Обидва змінюють оригінальний масив.',
            'Викличте shift() на масиві orders, потім unshift() з новим замовленням. Порядок важливий — спочатку видалити, потім додати.',
            'orders.shift();\norders.unshift(newOrder);\nreturn orders;'
        ],
        solution: 'const replaceFirstOrder = (orders, newOrder) => {\n    orders.shift();\n    orders.unshift(newOrder);\n    return orders;\n};'
    },

    {
        id: 15,
        category: 'arrays',
        title: 'Пошук у масиві',
        description: 'Напишіть функцію, яка перевіряє, чи є страва в меню, і повертає об\'єкт із результатом пошуку.',
        instructions: [
            'Використайте includes() щоб перевірити, чи є страва в масиві',
            'Використайте indexOf() щоб знайти індекс страви',
            'Поверніть об\'єкт { found: true/false, index: число }'
        ],
        example: 'findDish(["Борщ", "Салат", "Піца"], "Салат") → { found: true, index: 1 }\nfindDish(["Борщ", "Салат", "Піца"], "Риба") → { found: false, index: -1 }',
        expectedOutput: null,
        starterCode: 'const findDish = (menu, dish) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'findDish',
        tests: [
            {
                input: [['Борщ', 'Салат', 'Піца'], 'Салат'],
                expected: { found: true, index: 1 }
            },
            {
                input: [['Борщ', 'Салат', 'Піца'], 'Риба'],
                expected: { found: false, index: -1 }
            },
            {
                input: [['Кава'], 'Кава'],
                expected: { found: true, index: 0 }
            },
            {
                input: [[], 'Борщ'],
                expected: { found: false, index: -1 }
            }
        ],
        theory: {
            title: 'includes() та indexOf()',
            content: 'includes() перевіряє, чи містить масив певне значення, і повертає true або false. indexOf() повертає індекс першого знайденого елемента, або -1 якщо елемент не знайдено. Обидва методи використовують суворе порівняння (===), тому тип даних має збігатися.',
            example: 'const menu = ["Борщ", "Салат", "Піца"];\n\nmenu.includes("Салат");  // true\nmenu.includes("Риба");  // false\n\nmenu.indexOf("Салат");  // 1\nmenu.indexOf("Риба");   // -1'
        },
        hints: [
            'includes() повертає true або false. indexOf() повертає індекс елемента або -1, якщо не знайдено.',
            'Створіть об\'єкт із двома полями: found — результат includes(), index — результат indexOf().',
            'return {\n    found: menu.includes(dish),\n    index: menu.indexOf(dish)\n};'
        ],
        solution: 'const findDish = (menu, dish) => {\n    return {\n        found: menu.includes(dish),\n        index: menu.indexOf(dish)\n    };\n};'
    },

    {
        id: 16,
        category: 'arrays',
        title: 'Подвоїти числа',
        description: 'Напишіть функцію, яка приймає масив чисел і повертає новий масив, де кожне число помножене на 2.',
        instructions: [
            'Використайте метод map() для створення нового масиву',
            'Поверніть результат з функції'
        ],
        example: '[1, 2, 3] → [2, 4, 6]',
        expectedOutput: '[2, 4, 6]',
        starterCode: 'const multiplyByTwo = (numbers) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'multiplyByTwo',
        tests: [
            {
                input: [[1, 2, 3]],
                expected: [2, 4, 6]
            },
            {
                input: [[5, 10]],
                expected: [10, 20]
            },
            {
                input: [[]],
                expected: []
            }
        ],
        theory: {
            title: 'Метод map()',
            content: 'map() створює новий масив, викликаючи функцію для кожного елемента оригінального масиву. Результат — новий масив, де кожен елемент є значенням, що повернула функція. Оригінальний масив не змінюється.',
            example: 'const numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);\n\nconsole.log(doubled); // [2, 4, 6]'
        },
        hints: [
            'Тобі потрібно створити новий масив, де кожне число буде змінене. Який метод масиву створює новий масив, трансформуючи кожен елемент?',
            'map() приймає функцію-колбек. Ця функція отримує поточний елемент і повинна повернути нове значення для нього.',
            'Спробуй повернути num * 2 з колбек-функцією:\nnumbers.map(num => num * 2)'
        ],
        solution: 'const multiplyByTwo = (numbers) => {\n    return numbers.map(num => num * 2);\n};'
    },
    {
        id: 17,
        category: 'arrays',
        title: 'Парні числа',
        description: 'Напишіть функцію, яка повертає лише парні числа з масиву.',
        instructions: [
            'Використайте метод filter() для відбору парних чисел',
            'Парне число — це число, яке ділиться на 2 без залишку (num % 2 === 0)',
            'Поверніть результат з функції'
        ],
        example: '[1, 2, 3, 4, 5, 6] → [2, 4, 6]',
        expectedOutput: '[2, 4, 6]',
        starterCode: 'const getEvenNumbers = (numbers) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'getEvenNumbers',
        tests: [
            {
                input: [[1, 2, 3, 4, 5, 6]],
                expected: [2, 4, 6]
            },
            {
                input: [[10, 15, 20]],
                expected: [10, 20]
            },
            {
                input: [[]],
                expected: []
            }
        ],
        theory: {
            title: 'Метод filter()',
            content: 'filter() створює новий масив з тих елементів, для яких callback-функція повернула true. Елементи, для яких функція повернула false, не потрапляють до нового масиву. Оригінальний масив не змінюється.',
            example: 'const numbers = [1, 2, 3, 4, 5, 6];\nconst even = numbers.filter(num => num % 2 === 0);\n\nconsole.log(even); // [2, 4, 6]'
        },
        hints: [
            'Тобі потрібно відібрати з масиву лише ті числа, які задовольняють певну умову. Який метод масиву фільтрує елементи за умовою?',
            'filter() приймає функцію, що повертає true для елементів, які треба залишити, і false — для тих, які треба прибрати.',
            'Парне число ділиться на 2 без залишку: num % 2 === 0.\nСпробуй: numbers.filter(num => num % 2 === 0)'
        ],
        solution: 'const getEvenNumbers = (numbers) => {\n    return numbers.filter(num => num % 2 === 0);\n};'
    },
        {
        id: 18,
        category: 'arrays',
        title: 'slice() та splice()',
        description: 'Напишіть функцію, яка обробляє список замовлень: скасовує декілька замовлень з певної позиції та повертає результат разом із прев\'ю перших замовлень, що залишилися.',
        instructions: [
            'Використайте splice() щоб видалити cancelCount елементів починаючи з позиції cancelFrom. Збережіть видалені елементи у змінну cancelled',
            'Використайте slice(0, 2) щоб отримати копію перших двох елементів масиву, що залишився. Збережіть у змінну preview',
            'Поверніть об\'єкт { cancelled, preview }'
        ],
        example: 'processOrders(["Борщ", "Салат", "Піца", "Кава", "Десерт"], 2, 1)\n→ { cancelled: ["Піца"], preview: ["Борщ", "Салат"] }',
        expectedOutput: null,
        starterCode: 'const processOrders = (orders, cancelFrom, cancelCount) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'processOrders',
        tests: [
            {
                input: [['Борщ', 'Салат', 'Піца', 'Кава', 'Десерт'], 2, 1],
                expected: { cancelled: ['Піца'], preview: ['Борщ', 'Салат'] }
            },
            {
                input: [['Суп', 'Стейк'], 0, 1],
                expected: { cancelled: ['Суп'], preview: ['Стейк'] }
            },
            {
                input: [['Кава', 'Чай', 'Сік'], 1, 2],
                expected: { cancelled: ['Чай', 'Сік'], preview: ['Кава'] }
            },
            {
                input: [['Піца', 'Бургер', 'Паста', 'Різото'], 1, 3],
                expected: { cancelled: ['Бургер', 'Паста', 'Різото'], preview: ['Піца'] }
            }
        ],
        theory: {
            title: 'slice() та splice()',
            content: 'slice(start, end) повертає новий масив із елементами від start до end (не включно). Оригінальний масив НЕ змінюється. splice(start, deleteCount) видаляє елементи з оригінального масиву і повертає масив видалених елементів. Оригінальний масив ЗМІНЮЄТЬСЯ. Ключова різниця: slice — копіює, splice — мутує.',
            example: 'const arr = ["А", "Б", "В", "Г"];\n\narr.slice(1, 3);  // ["Б", "В"] — arr незмінний\narr.splice(1, 2);  // ["Б", "В"] — arr став ["А", "Г"]'
        },
        hints: [
            'splice() змінює масив і повертає видалені елементи. slice() створює копію частини масиву без зміни оригіналу.',
            'Збережіть результат splice() у змінну cancelled, а результат slice(0, 2) — у змінну preview. Обидва викличте на одному масиві orders, але splice — першим, бо він його змінює.',
            'const cancelled = orders.splice(cancelFrom, cancelCount);\nconst preview = orders.slice(0, 2);\nreturn { cancelled, preview };'
        ],
        solution: 'const processOrders = (orders, cancelFrom, cancelCount) => {\n    const cancelled = orders.splice(cancelFrom, cancelCount);\n    const preview = orders.slice(0, 2);\n    return { cancelled, preview };\n};'
    },

    {
        id: 19,
        category: 'arrays',
        title: 'Знижка на ціни',
        description: 'Напишіть функцію, яка застосовує знижку до масиву цін і повертає новий масив зі зниженими цінами.',
        instructions: [
            'Використайте map() для створення нового масиву',
            'Для кожної ціни обчисліть значення зі знижкою: price - price * (discountPercent / 100)',
            'Поверніть новий масив'
        ],
        example: 'applyPriceDiscount([100, 200, 300], 10) → [90, 180, 270]',
        expectedOutput: null,
        starterCode: 'const applyPriceDiscount = (prices, discountPercent) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'applyPriceDiscount',
        tests: [
            {
                input: [[100, 200, 300], 10],
                expected: [90, 180, 270]
            },
            {
                input: [[150], 20],
                expected: [120]
            },
            {
                input: [[80, 120], 0],
                expected: [80, 120]
            },
            {
                input: [[250, 500, 750], 25],
                expected: [187.5, 375, 562.5]
            }
        ],
        theory: {
            title: 'Метод map()',
            content: 'map() створює новий масив, викликаючи функцію-колбек для кожного елемента оригінального масиву. Колбек отримує поточний елемент і повинен повернути нове значення. Оригінальний масив не змінюється. map() завжди повертає масив тієї ж довжини.',
            example: 'const prices = [100, 200, 300];\nconst discounted = prices.map(p => p * 0.9);\n\nconsole.log(discounted); // [90, 180, 270]\nconsole.log(prices);     // [100, 200, 300] — незмінений'
        },
        hints: [
            'map() приймає функцію, яка отримує кожен елемент і повертає нове значення. Результат — новий масив тієї ж довжини.',
            'Формула зі знижкою: price - price * (discountPercent / 100). Або коротше: price * (1 - discountPercent / 100).',
            'return prices.map(price => price - price * (discountPercent / 100));'
        ],
        solution: 'const applyPriceDiscount = (prices, discountPercent) => {\n    return prices.map(price => price - price * (discountPercent / 100));\n};'
    },

    {
        id: 20,
        category: 'arrays',
        title: 'Страви за бюджетом',
        description: 'Напишіть функцію, яка відбирає зі меню лише ті страви, ціна яких не перевищує заданий бюджет.',
        instructions: [
            'Масив menu містить об\'єкти з полями name та price',
            'Використайте filter() щоб залишити лише страви з price <= budget',
            'Поверніть відфільтрований масив'
        ],
        example: 'filterByBudget([{ name: "Борщ", price: 120 }, { name: "Стейк", price: 350 }], 200)\n→ [{ name: "Борщ", price: 120 }]',
        expectedOutput: null,
        starterCode: 'const filterByBudget = (menu, budget) => {\n    // ваш код\n};',
        difficulty: 'easy',
        functionName: 'filterByBudget',
        tests: [
            {
                input: [[{ name: 'Борщ', price: 120 }, { name: 'Стейк', price: 350 }, { name: 'Салат', price: 90 }], 200],
                expected: [{ name: 'Борщ', price: 120 }, { name: 'Салат', price: 90 }]
            },
            {
                input: [[{ name: 'Кава', price: 60 }, { name: 'Чай', price: 45 }], 50],
                expected: [{ name: 'Чай', price: 45 }]
            },
            {
                input: [[{ name: 'Піца', price: 250 }], 300],
                expected: [{ name: 'Піца', price: 250 }]
            },
            {
                input: [[{ name: 'Десерт', price: 180 }, { name: 'Суп', price: 160 }], 100],
                expected: []
            }
        ],
        theory: {
            title: 'Метод filter()',
            content: 'filter() створює новий масив з тих елементів, для яких колбек повернув true. Колбек отримує елемент і повинен повернути логічне значення. Оригінальний масив не змінюється. Довжина результату може бути будь-якою — від 0 до довжини оригіналу.',
            example: 'const menu = [\n    { name: "Борщ", price: 120 },\n    { name: "Стейк", price: 350 },\n    { name: "Салат", price: 90 }\n];\n\nconst cheap = menu.filter(dish => dish.price <= 200);\n// [{ name: "Борщ", price: 120 }, { name: "Салат", price: 90 }]'
        },
        hints: [
            'filter() залишає елементи, для яких умова дорівнює true. Доступ до властивості об\'єкта — через крапку: dish.price.',
            'Умова фільтрації: dish.price <= budget. filter() створить новий масив лише з тими об\'єктами, що відповідають умові.',
            'return menu.filter(dish => dish.price <= budget);'
        ],
        solution: 'const filterByBudget = (menu, budget) => {\n    return menu.filter(dish => dish.price <= budget);\n};'
    },
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
            'З模板них літерів створіть рядок: `Страва: ${name}` — де name це параметр функції.',
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
    },

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
            content: "for...in ітерує по всіх ключах об'єкта (власні + успадковані з прототипу). На кожній ітерації key містить ім\'я властивості як рядок. Для перевірки \"власна чи успадкована\" використовуйте obj.hasOwnProperty(key). Значення отримайте через obj[key].",
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
            'return Object.values(order).filter(v => typeof v === "number");'
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
        "id": 37,
        "category": "objects",
        "title": "Бюджетні страви в меню",
        "description": "Знайдіть усі страви в меню, ціна яких є меншою або рівною заданій бюджетній сумі.",
        "instructions": [
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
    },

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
    },

    {
        "id": 42,
        "category": "async",
        "title": "Створення базового промісу",
        "description": "Створіть функцію, яка повертає проміс. Проміс повинен успішно виконуватися, якщо передане число є парним, і відхилятися, якщо воно непарне.",
        "instructions": [
            "Функція приймає одне число (number)",
            "Поверніть новий об'єкт Promise за допомогою синтаксису new Promise((resolve, reject) => { ... })",
            "Якщо число парне (ділиться на 2 без залишку), викличте функцію resolve з текстом 'Парне'",
            "Якщо число непарне, викличте функцію reject з текстом 'Непарне'"
        ],
        "example": "checkEvenNumber(4) → Успішне виконання (resolve) зі значенням 'Парне'",
        "expectedOutput": null,
        "starterCode": "'use strict';\n\nconst checkEvenNumber = (number) => {\n  // Створіть та поверніть проміс\n};",
        "difficulty": "easy",
        "functionName": "checkEvenNumber",
        "tests": [
            {
                "input": [4],
                "expected": "Парне"
            },
            {
                "input": [0],
                "expected": "Парне"
            },
            {
                "input": [7],
                "expected": "Непарне"
            }
        ],
        "theory": {
            "title": "Основи промісів (Promise Basics)",
            "content": "Проміс (Promise) — це об'єкт, який представляє результат асинхронної операції. Він створюється через конструктор new Promise, який приймає функцію-колбек з двома аргументами: resolve (для успішного результату) та reject (для помилок). Проміс може перебувати в одному з трьох станів: pending (очікування), fulfilled (виконано успішно) або rejected (відхилено).",
            "example": "const myPromise = new Promise((resolve, reject) => {\n  const success = true;\n  if (success) resolve('Дякую!');\n  else reject('Помилка');\n});"
        },
        "hints": [
            "Використовуйте конструкцію return new Promise((resolve, reject) => { ... });",
            "Перевірити число на парність можна за допомогою оператора залишку від ділення: number % 2 === 0.",
            "Всередині умови if викликайте resolve('Парне'), а в блоці else — reject('Непарне')."
        ],
        "solution": "'use strict';\n\nconst checkEvenNumber = (number) => {\n  return new Promise((resolve, reject) => {\n    if (number % 2 === 0) {\n      resolve('Парне');\n    } else {\n      reject('Непарне');\n    }\n  });\n};"
    },

    {
        "id": 43,
        "category": "async",
        "title": "Обробка результатів промісу",
        "description": "Створіть функцію, яка приймає проміс, обробляє його за допомогою методів .then() та .catch() і завжди повертає статус виконання у вигляді текстового рядка.",
        "instructions": [
            "Функція приймає один параметр — promise (об'єкт Промісу)",
            "Використовуйте метод .then() для обробки успішного виконання промісу та повернення рядка 'Виконано'",
            "Використовуйте метод .catch() для перехоплення помилки (відхилення промісу) та повернення рядка 'Помилка'",
            "Оскільки операція асинхронна, сама функція handlePromise повинна повертати цей новий ланцюжок промісів"
        ],
        "example": "handlePromise(Promise.resolve()) → Проміс, який вирішиться в рядок 'Виконано'",
        "expectedOutput": null,
        "starterCode": "'use strict';\n\nconst handlePromise = (promise) => {\n  // Обробіть проміс за допомогою .then() та .catch()\n};",
        "difficulty": "easy",
        "functionName": "handlePromise",
        "tests": [
            {
                "input": [
                    "Promise.resolve('Успіх')"
                ],
                "expected": "Виконано"
            },
            {
                "input": [
                    "Promise.reject('Провал')"
                ],
                "expected": "Помилка"
            }
        ],
        "theory": {
            "title": "Споживання промісів: .then() та .catch()",
            "content": "Після того, як проміс створено, його результат потрібно обробити. Для цього використовуються вбудовані методи: .then(callback) виконується, коли проміс переходить у стан fulfilled (успіх), а .catch(callback) — коли проміс переходить у стан rejected (помилка). Обидва методи повертають новий проміс, що дозволяє будувати ланцюжки.",
            "example": "fetchData().then(res => 'Отримано').catch(err => 'Збій');"
        },
        "hints": [
            "Вам потрібно повернути результат обробки: return promise.then(...).catch(...);",
            "Всередині .then() передайте функцію, яка повертає рядок 'Виконано': () => 'Виконано'.",
            "Всередині .catch() передайте функцію, яка повертає рядок 'Помилка': () => 'Помилка'."
        ],
        "solution": "'use strict';\n\nconst handlePromise = (promise) => {\n  return promise\n    .then(() => 'Виконано')\n    .catch(() => 'Помилка');\n};"
    }
 
];

export function getChallengesByCategory(categoryId) {
    return challenges.filter(c => c.category === categoryId);
}