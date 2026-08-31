export const topics = [
    {
        id: 'variables',
        title: 'Змінні: let та const',
        content: 'Змінна — це іменована область пам\'яті для зберігання даних. У сучасному JavaScript використовують let для змінних, які будуть змінюватися, та const — для констант.',
        example: `const restaurantName = "JS Cafe";  // константа\nlet tableNumber = 5;                // змінна\ntableNumber = 7;                     // можна змінити\n// restaurantName = "New Name";      // TypeError!`,
        notes: [
            'Використовуйте const за замовчуванням, let — тільки коли потрібно переприсвоювати',
            'Ніколи не використовуйте var у новому коді',
            'Назви змінних мають бути зрозумілими: orderTotal, а не x'
        ]
    },
    {
        id: 'data-types',
        title: 'Типи даних',
        content: 'JavaScript має 7 примітивних типів: string, number, boolean, null, undefined, symbol, bigint. Також є об\'єктний тип — object. typeof повертає тип як рядок.',
        example: `typeof "Борщ"      // "string"\ntypeof 42          // "number"\ntypeof true        // "boolean"\ntypeof null        // "object" ⚠️ історичний баг\ntypeof undefined   // "undefined"`,
        notes: [
            'typeof null повертає "object" — це відомий нюанс мови',
            'Масиви та функції технічно є об\'єктами',
            'Перевіряйте тип через typeof перед операціями'
        ]
    },
    {
        id: 'operators',
        title: 'Оператори та вирази',
        content: 'Оператори виконують дії над значеннями. Арифметичні (+, -, *, /, %), порівняння (===, !==, >, <), логічні (&&, ||, !). Пріоритет: спочатку *, /, %, потім +, -.',
        example: `const price = 100;\nconst quantity = 3;\nconst total = price * quantity;  // 300\nconst hasDiscount = total > 250;   // true`,
        notes: [
            'Використовуйте === замість == для суворого порівняння',
            '% — це остача від ділення: 10 % 3 === 1',
            'Дужки () змінюють пріоритет: (2 + 3) * 4'
        ]
    },
    {
        id: 'strings',
        title: 'Рядки та шаблонні рядки',
        content: 'Рядки створюються через одинарні \', подвійні " або зворотні \` лапки. Шаблонні рядки (template literals) дозволяють вставляти змінні через ${...} та робити багаторядкові рядки.',
        example: `const dish = "Борщ";\nconst price = 120;\n\n// Конкатенація\nconst old = "Страва: " + dish + ", " + price + " грн";\n\n// Шаблонний рядок (краще)\nconst modern = \`Страва: \${dish}, \${price} грн\`;`,
        notes: [
            'Зворотні лапки \` підтримують багаторядковість без \\n',
            'Усередині ${} можна писати будь-які вирази',
            'Шаблонні рядки — це стандарт для форматування тексту'
        ]
    },
    {
        id: 'if-else',
        title: 'if / else',
        content: 'Умовний оператор виконує код лише якщо умова true. if — основна умова, else if — додаткові перевірки, else — що робити якщо жодна умова не підійшла.',
        example: `const orderTotal = 600;\n\nif (orderTotal > 1000) {\n  console.log("Знижка 15%");\n} else if (orderTotal > 500) {\n  console.log("Знижка 10%");\n} else {\n  console.log("Без знижки");\n}`,
        notes: [
            'Фігурні дужки {} обов\'язкові навіть для одного рядка',
            'Умови перевіряються зверху вниз, перша true зупиняє перевірку',
            'Не забувайте break в switch, але в if/else він не потрібен'
        ]
    },
    {
        id: 'switch-ternary',
        title: 'switch та тернарний оператор',
        content: 'switch порівнює значення з кількома варіантами через case. Тернарний оператор умова ? значення1 : значення2 — це короткий запис if/else для простих випадків.',
        example: `// switch\nconst day = "понеділок";\nswitch (day) {\n  case "понеділок":\n  case "вівторок":\n    console.log("робочий");\n    break;\n  default:\n    console.log("інший");\n}\n\n// тернарний\nconst age = 20;\nconst status = age >= 18 ? "дорослий" : "неповнолітній";`,
        notes: [
            'Без break виконається наступний case — часта помилка!',
            'Тернарний не підходить для складних умов або вкладень',
            'switch кращий для порівняння одного значення з багатьма варіантами'
        ]
    },
    {
        id: 'logical-operators',
        title: 'Логічні оператори',
        content: '&& (AND) — true якщо обидва true. || (OR) — true якщо хоча б один true. ! (NOT) — інвертує значення. Використовуються для комбінації умов.',
        example: `const isAvailable = true;\nconst hasMoney = true;\n\nif (isAvailable && hasMoney) {\n  console.log("Можна замовити");\n}\n\nconst isWeekend = false;\nif (!isWeekend) {\n  console.log("Робочий день");\n}`,
        notes: [
            '&& зупиняється на першому false (short-circuit)',
            '|| зупиняється на першому true (short-circuit)',
            '! перетворює значення в boolean та інвертує'
        ]
    }
];