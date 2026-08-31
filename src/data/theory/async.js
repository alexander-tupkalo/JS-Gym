export const topics = [
    {
        id: 'what-is-async',
        title: 'Що таке асинхронність',
        content: 'Асинхронний код виконується "в фоні" не блокуючи основний потік. Приклади: завантаження даних, таймери, читання файлів. JavaScript — однопоточний, але асинхронність дозволяє йому не "зависати".',
        example: `// Синхронний — блокує\nconsole.log("Початок");\nfor (let i = 0; i < 1000000000; i++) {}  // довга операція\nconsole.log("Кінець");  // чекаємо дуже довго\n\n// Асинхронний — не блокує\nconsole.log("Початок");\nsetTimeout(() => {\n  console.log("Після затримки");\n}, 1000);\nconsole.log("Одразу");  // виведеться одразу`,
        notes: [
            'Синхронний код виконується послідовно, рядок за рядком',
            'Асинхронний код починає виконання, але результат повертається пізніше',
            'JavaScript використовує Event Loop для управління асинхронністю'
        ]
    },
    {
        id: 'setTimeout',
        title: 'setTimeout',
        content: 'setTimeout(callback, ms) викликає функцію через вказану кількість мілісекунд. Повертає ID таймера, який можна використати з clearTimeout().',
        example: `// Виклик через 2 секунди\nconst timerId = setTimeout(() => {\n  console.log("Час вийшов!");\n}, 2000);\n\n// Скасувати таймер\n// clearTimeout(timerId);\n\n// Повторення через setInterval\nconst intervalId = setInterval(() => {\n  console.log("Тік");\n}, 1000);\n\n// Зупинити через 5 секунд\nsetTimeout(() => clearInterval(intervalId), 5000);`,
        notes: [
            'Мілісекунди: 1000 мс = 1 секунда',
            'setTimeout не гарантує точний час — це мінімальна затримка',
            'setInterval може накопичувати затримки якщо callback довгий'
        ]
    },
    {
        id: 'what-is-promise',
        title: 'Що таке Promise',
        content: 'Promise — це об\'єкт, що представляє результат асинхронної операції. Має три стани: pending (очікування), fulfilled (успіх), rejected (помилка). Перехід відбувається лише один раз.',
        example: `// Створення промісу\nconst orderPromise = new Promise((resolve, reject) => {\n  const success = true;\n  \n  if (success) {\n    resolve("Замовлення готове!");  // успіх\n  } else {\n    reject("Помилка на кухні");    // помилка\n  }\n});\n\nconsole.log(orderPromise);  // Promise {<pending>}`,
        notes: [
            'Promise створюється через new Promise з функцією-екстрактором',
            'resolve та reject — це функції, які змінюють стан промісу',
            'Проміс не може змінити стан: fulfilled → rejected неможливо'
        ]
    },
    {
        id: 'resolve-reject',
        title: 'resolve та reject',
        content: 'resolve(value) переводить проміс у стан fulfilled з результатом value. reject(error) переводить у стан rejected з причиною error. Значенням може бути будь-що.',
        example: `function fetchMenu() {\n  return new Promise((resolve, reject) => {\n    const menu = ["Борщ", "Салат"];\n    \n    if (menu.length > 0) {\n      resolve(menu);              // передаємо масив\n    } else {\n      reject(new Error("Меню порожнє"));  // передаємо помилку\n    }\n  });\n}`,
        notes: [
            'resolve() може приймати будь-яке значення, включаючи інший проміс',
            'reject() зазвичай приймає Error об\'єкт для стеку трасування',
            'Викликайте resolve/reject лише ОДИН раз'
        ]
    },
    {
        id: 'then-catch',
        title: 'then та catch',
        content: 'then(onFulfilled) викликається при успіху. catch(onRejected) при помилці. Обидва повертають новий проміс, дозволяючи ланцюжки (chaining).',
        example: `fetchMenu()\n  .then((menu) => {\n    console.log("Меню:", menu);\n    return menu.length;\n  })\n  .then((count) => {\n    console.log("Кількість страв:", count);\n  })\n  .catch((error) => {\n    console.error("Помилка:", error.message);\n  });\n\n// finally — виконається завжди\nfetchMenu()\n  .finally(() => console.log("Завантаження завершено"))\n  .then(...)\n  .catch(...);`,
        notes: [
            'then повертає проміс — можна ланцюжити',
            'catch перехоплює помилки з будь-якого місця ланцюжка',
            'finally корисний для "прибирання" (hide loader і т.д.)'
        ]
    },
    {
        id: 'async-await',
        title: 'async / await',
        content: `PLACEHOLDER: ВСТАВТЕ ВАШ КОНТЕНТ ТУТ`,
        example: `// PLACEHOLDER: ВСТАВТЕ ВАШ ПРИКЛАД ТУТ`,
        notes: [
            'PLACEHOLDER: замініть ці нотатки',
            'PLACEHOLDER: замініть ці нотатки'
        ]
    }
];