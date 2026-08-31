export const topics = [
    {
        id: 'what-is-function',
        title: 'Що таке функція',
        content: 'Функція — це іменований блок коду, який можна викликати багато разів. Функції допомагають організувати код, уникнути повторень і зробити його читабельнішим.',
        example: `// Оголошення функції\nfunction greet() {\n  console.log("Ласкаво просимо!");\n}\n\n// Виклик функції\ngreet();  // "Ласкаво просимо!"\ngreet();  // "Ласкаво просимо!" — можна багато разів`,
        notes: [
            'Код всередині функції не виконається поки ви її не викличете',
            'Функція — це "рецепт": описує ЩО робити, а не робить це сама',
            'Добрі назви функцій описують дію: calculateTotal, formatName'
        ]
    },
    {
        id: 'parameters-arguments',
        title: 'Параметри та аргументи',
        content: 'Параметр — це змінна в оголошенні функції. Аргумент — це фактичне значення, яке передається при виклику. Порядок має значення.',
        example: `function orderDish(dish, quantity) {\n  // dish, quantity — параметри\n  console.log(\`\${dish} x \${quantity}\`);\n}\n\n// "Борщ" і 2 — аргументи\norderDish("Борщ", 2);  // "Борщ x 2"\norderDish("Кава", 1);  // "Кава x 1"`,
        notes: [
            'Перший аргумент потрапляє в перший параметр, другий — у другий',
            'Якщо передати менше аргументів — параметри будуть undefined',
            'Якщо передати більше — зайві будуть проігноровані (але доступні через arguments)'
        ]
    },
    {
        id: 'return',
        title: 'return',
        content: 'return зупиняє виконання функції і повертає значення тому, хто її викликав. Без return функція поверне undefined. return і console.log — це різні речі!',
        example: `function calculateTotal(price, qty) {\n  return price * qty;  // повертає результат\n}\n\nconst total = calculateTotal(100, 3);\nconsole.log(total);  // 300\n\n// Помилка新人:\nfunction bad(price, qty) {\n  console.log(price * qty);  // виведе, але поверне undefined\n}`,
        notes: [
            'console.log виводить в консоль, return — повертає значення з функції',
            'Код після return не виконається',
            'return без значення поверне undefined'
        ]
    },
    {
        id: 'declaration-expression',
        title: 'Function Declaration та Function Expression',
        content: 'Function Declaration: function name() {}. Function Expression: const name = function() {}. Головна різниця — hoisting: Declaration можна викликати до оголошення.',
        example: `// Declaration — hoisting працює\ngreet();  // працює!\nfunction greet() {\n  console.log("Привіт");\n}\n\n// Expression — hoisting НЕ працює\n// greet2();  // TypeError!\nconst greet2 = function() {\n  console.log("Привіт 2");\n};`,
        notes: [
            'У сучасному коді перевагу віддають Function Expression (const)',
            'Arrow functions — це різновид Function Expression',
            'Hoisting може призвести до неочікуваної поведінки — уникайте його'
        ]
    },
    {
        id: 'arrow-functions',
        title: 'Arrow Functions',
        content: 'Синтаксис () => {} — коротший запис функцій. Якщо один параметр — дужки можна опустити. Якщо тіло — один вираз — фігурні дужки і return можна опустити.',
        example: `// Повна форма\nconst add = (a, b) => {\n  return a + b;\n};\n\n// Скорочена форма (implicit return)\nconst addShort = (a, b) => a + b;\n\n// Один параметр — без дужок\nconst double = n => n * 2;\n\n// Без параметрів\nconst getRandom = () => Math.random();`,
        notes: [
            'Implicit return працює ТІЛЬКИ без фігурних дужок',
            '() => {} з фігурними дужками потребує явний return',
            'Arrow functions не мають свого this — корисно в колбеках'
        ]
    },
    {
        id: 'callbacks',
        title: 'Callback-функції',
        content: 'Функція може бути передана як аргумент іншій функції. Така функція називається callback. Вона викликається всередині іншої функції коли це потрібно.',
        example: `function processOrder(order, onSuccess, onError) {\n  if (order.isValid) {\n    onSuccess("Замовлення прийнято");\n  } else {\n    onError("Помилка в замовленні");\n  }\n}\n\nprocessOrder(\n  { isValid: true },\n  (msg) => console.log("✓ " + msg),  // callback\n  (err) => console.log("✗ " + err)   // callback\n);`,
        notes: [
            'map, filter, reduce — всі приймають callback-функції',
            'Callback дозволяє налаштувати поведінку функції',
            'Це основа для роботи з подіями та асинхронним кодом'
        ]
    }
];