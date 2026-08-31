 export const challenges = [

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
    }
];