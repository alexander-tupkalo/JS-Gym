export const challenges = [
    {
        "id": 43,
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
        "isAsync": true,
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
                "expected": "Непарне",
                "expectReject": true
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
        "id": 44,
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
        "isAsync": true,
        "functionName": "handlePromise",
        "tests": [
            {
                "input": [
                    {
                        "__type": "promise",
                        "action": "resolve",
                        "value": "Успіх"
                    }
                ],
                "expected": "Виконано"
            },
            {
                "input": [
                    {
                        "__type": "promise",
                        "action": "reject",
                        "value": "Провал"
                    }
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